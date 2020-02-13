using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Capstone.Data;
using Capstone.Models.Data;
using Microsoft.AspNetCore.Identity;
using Capstone.Routes.V1;
using Capstone.Models;
using Capstone.Helpers;
using Microsoft.AspNetCore.Authorization;
using Capstone.Models.ViewModels;

namespace Capstone.Controllers.V1
{

    [Authorize]

    [ApiController]
    public class CompulsionsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;


        public CompulsionsController(ApplicationDbContext context)
        {
            _context = context;


        }

        // GET: api/Compulsions
        [HttpGet(Api.Compulsions.GetAll)]
        public async Task<ActionResult<IEnumerable<Compulsion>>> GetCompulsions()
        {
            var userId = HttpContext.GetUserId();
            var compulsions = await _context.Compulsion
                .Include(r => r.Records)
                .Where(u => u.ApplicationUserId == userId)
                .OrderByDescending(c => c.Description)
                .Take(20)
                .Select(c => new ListOfCompulsionsViewModel
                {
                    CompulsionId = c.CompulsionId,
                    Description = c.Description


                }).ToListAsync();

            if (compulsions == null)
            {
                return NotFound();
            }





            return Ok(compulsions);

        }

        // GET: api/Compulsions/5
        [HttpGet(Api.Compulsions.Get)]
        public async Task<IActionResult> GetCompulsion(int id, [FromQuery]string includes)
        {
            var userId = HttpContext.GetUserId();

            OneCompulsionWithRecordsViewModel compulsion = null;


            if (includes == null)
            {
                var compulsionDataModel = await _context.Compulsion.FindAsync(id);
                return Ok(compulsionDataModel);
            }

            if (includes == Api.Compulsions.records)
            {
                compulsion = await GetCompulsionWithRecords(id);


                return Ok(compulsion);
            }


            if (compulsion == null)
            {
                return NotFound();
            }



            return Ok(compulsion);
        }

        // PUT: api/Compulsions/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut(Api.Compulsions.Put)]
        public async Task<IActionResult> PutCompulsion(int id, Compulsion compulsion)
        {
            if (id != compulsion.CompulsionId)
            {
                return BadRequest();
            }

            _context.Entry(compulsion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompulsionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Compulsions
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost(Api.Compulsions.Post)]

        public async Task<ActionResult<Compulsion>> PostCompulsion(Compulsion compulsion)
        {

            var userId = HttpContext.GetUserId();
            compulsion.ApplicationUserId = userId;
            _context.Compulsion.Add(compulsion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompulsion", new { id = compulsion.CompulsionId }, compulsion);
        }

        // DELETE: api/Compulsions/5


        [HttpDelete(Api.Compulsions.Delete)]
        public async Task<ActionResult<Compulsion>> DeleteCompulsion(int id)
        {
            var compulsion = await _context.Compulsion.FindAsync(id);
            var userId = HttpContext.GetUserId();
            if (compulsion == null)
            {
                return NotFound();
            }

            _context.Compulsion.Remove(compulsion);
            await _context.SaveChangesAsync();

            return compulsion;
        }

        private bool CompulsionExists(int id)
        {
            return _context.Compulsion.Any(e => e.CompulsionId == id);
        }

        private async Task <OneCompulsionWithRecordsViewModel> GetCompulsionWithRecords(int id)
        {
            var userId = HttpContext.GetUserId();
            var newView = await _context.Compulsion
                .Include(r => r.Records)
                .Where(c => c.ApplicationUserId == userId && c.CompulsionId == id)
                .Select(c => new OneCompulsionWithRecordsViewModel
                {
                    CompulsionId = c.CompulsionId,
                    Description = c.Description,
                    Records = c.Records

                }).FirstOrDefaultAsync();

            return newView;
        }


    }




}


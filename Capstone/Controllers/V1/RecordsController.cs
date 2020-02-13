using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Capstone.Data;
using Capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Capstone.Routes.V1;
using Capstone.Helpers;
using Capstone.Models.ViewModels;

namespace Capstone.Controllers
{
    // [AllowAnonymous]

    [Authorize]

    [ApiController]
    public class RecordsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public RecordsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Records
        [HttpGet(Api.Record.GetAll)]
        public async Task<ActionResult<IEnumerable<Record>>> GetRecord()
        {
            var userId = HttpContext.GetUserId();
            var records = await _context.Record

                .Where(u => u.ApplicationUserId == userId)
                .ToListAsync();
            if (records == null)
            {
                return NotFound();
            };

            return Ok(records);
        }

        // GET: api/Records/5
        [HttpGet(Api.Record.Get)]
        public async Task<ActionResult<Record>> GetRecord(int id)
        {
            var record = await _context.Record.FindAsync(id);

            if (record == null)
            {
                return NotFound();
            }

            return record;
        }

        // PUT: api/Records/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut(Api.Record.Put)]
        public async Task<IActionResult> PutRecord(int id, Record record)
        {
            if (id != record.RecordId)
            {
                return BadRequest();
            }

            _context.Entry(record).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RecordExists(id))
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

        // POST: api/Records
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost(Api.Record.Post)]
        public async Task<ActionResult<Record>> PostRecord(RecordViewModel recordViewModel)
        {
            var record = new Record()
            {
                CompulsionId = recordViewModel.CompulsionId,
                PatientActionId = recordViewModel.PatientActionId,
                TimeStamp = DateTime.Now
            };
            try
            {
                var userId = HttpContext.GetUserId();
                record.ApplicationUserId = userId;
                _context.Record.Add(record);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                //throw new EntryPointNotFoundException();
            }

            return CreatedAtAction("GetRecord", new { id = record.RecordId }, record);
        }

        // DELETE: api/Records/5
        [HttpDelete(Api.Record.Delete)]
        public async Task<ActionResult<Record>> DeleteRecord(int id)
        {
            var record = await _context.Record.FindAsync(id);
            if (record == null)
            {
                return NotFound();
            }

            _context.Record.Remove(record);
            await _context.SaveChangesAsync();

            return record;
        }

        private bool RecordExists(int id)
        {
            return _context.Record.Any(e => e.RecordId == id);
        }
    }
}

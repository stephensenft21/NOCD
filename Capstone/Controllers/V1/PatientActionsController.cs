using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Capstone.Data;
using Capstone.Models.Data;
using Microsoft.AspNetCore.Authorization;
using Capstone.Routes.V1;

namespace Capstone.Controllers
{
 //[Authorize]
    [AllowAnonymous]
    [ApiController]
    public class PatientActionsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public PatientActionsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/PatientActions
        [HttpGet(Api.PatientAction.GetAll)]
        public async Task<ActionResult<IEnumerable<PatientAction>>> GetPatientAction()
        {
            return await _context.PatientAction.ToListAsync();
        }

        // GET: api/PatientActions/5
        [HttpGet(Api.PatientAction.Get)]
        public async Task<ActionResult<PatientAction>> GetPatientAction(int id)
        {
            var patientAction = await _context.PatientAction.FindAsync(id);

            if (patientAction == null)
            {
                return NotFound();
            }

            return patientAction;
        }

        // PUT: api/PatientActions/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPatientAction(int id, PatientAction patientAction)
        {
            if (id != patientAction.PatientActionId)
            {
                return BadRequest();
            }

            _context.Entry(patientAction).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PatientActionExists(id))
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

        // POST: api/PatientActions
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
      

        // DELETE: api/PatientActions/5
       

        private bool PatientActionExists(int id)
        {
            return _context.PatientAction.Any(e => e.PatientActionId == id);
        }
    }
}

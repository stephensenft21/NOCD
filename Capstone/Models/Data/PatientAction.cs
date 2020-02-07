using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Models.Data
{
    public class PatientAction
    {
        [Key]
        public int PatientActionId { get; set; }
        [Required]
        public string ActionName { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Models.Data
{
    public class Compulsion
    {
        [Key]
        public int CompulsionId { get; set; }
        [Required(ErrorMessage = "Please Add Your Description")]

        public string Description { get; set; }
    
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public virtual ICollection<Record> Records { get; set; }
    }
}

using Capstone.Models.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Models
{
    public class Record
    {
        [Key]
        public int RecordId { get; set; }
        [Required]
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        [DataType(DataType.Date)]
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime TimeStamp { get; set; }
        [Required]
        public int CompulsionId { get; set; }
        public virtual Compulsion Compulsion { get; set; }
        [Required]
        public int PatientActionId { get; set; }
        
        public PatientAction PatientAction { get; set; }
     
    }
}

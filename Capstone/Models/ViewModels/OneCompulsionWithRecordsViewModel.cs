using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Models.ViewModels
{
    public class OneCompulsionWithRecordsViewModel
    {
        public int CompulsionId { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Record> Records { get; set; }
    }
}

using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Models.Data
{
    // ******************* 
    // NOTE: Do NOT return an ApplicationUser as part of a json response.
    // It includes sensitive information on it.
    // Instead, always convert an ApplicationUser to an ApplicationUserViewModel before it get sent as JSON
    public class ApplicationUser : IdentityUser
    {
        

        

        public virtual ICollection<Compulsion> Compulsions { get; set; }
    }
}

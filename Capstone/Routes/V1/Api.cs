using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Routes.V1
{
    public static class Api
    {
        internal const string Root = "api";
        internal const string Version = "v1";
        internal const string Base = Root + "/" + Version;

        public static class Values
        {
            public const string GetAll = Base + "/Values";
            public const string Get = Base + "/Values/{id}";
        }
        public static class Compulsions
        {
            public const string GetAll = Base + "/Compulsions";
            public const string Get = Base + "/Compulsions/{id}";
            public const string Delete = Base + "/Compulsions/{id}";
            public const string Put = Base + "/Compulsions/{id}";
            public const string Post = Base + "/Compulsions";



            // Query string variables
            public const string records = "Records";
            public const string submit = "Submit";
            public const string resist = "Resist";
            public const string undo = "Undo";

        }

        public static class Record
        {
            public const string GetAll = Base + "/Records";
            public const string Get = Base + "/Records/{id}";
            public const string Delete = Base + "/Records/{id}";
            public const string Put = Base + "/Records/{id}";
            public const string Post = Base + "/Records";

        }

        public static class PatientAction
        {
            public const string GetAll = Base + "/PatientActions";
            public const string Get = Base + "/PatientActions/{id}";
            public const string Delete = Base + "/PatientActions/{id}";
            public const string Put = Base + "/PatientActions/{id}";
            public const string Post = Base + "/PatientActions";

        }

        



        public static class User
        {
            public const string Login = Base + "/Auth/Login";
            public const string Register = Base + "/Auth/Register";
            public const string Refresh = Base + "/Auth/Refresh";
        }
    }
}

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
            public const string Get = Base + "/Compulsion/{id}";
            public const string Delete = Base + "/Compulsion/{id}";
            public const string Put = Base + "/Compulsion/{id}";
            public const string Post = Base + "/Compulsion";



            // Query string variables
            public const string records = "records";
            public const string submit = "submit";
            public const string resist = "resist";
            public const string undo = "undo";

        }

        public static class Record
        {
            public const string GetAll = Base + "/Records";
            public const string Get = Base + "/Record/{id}";
            public const string Delete = Base + "/Record/{id}";
            public const string Put = Base + "/Record/{id}";
            public const string Post = Base + "/Record";

        }

        public static class PatientAction
        {
            public const string GetAll = Base + "/PatientActions";
            public const string Get = Base + "/PatientAction/{id}";
            public const string Delete = Base + "/PatientAction/{id}";
            public const string Put = Base + "/PatientAction/{id}";
            public const string Post = Base + "/PatientAction";

        }

        



        public static class User
        {
            public const string Login = Base + "/Auth/Login";
            public const string Register = Base + "/Auth/Register";
            public const string Refresh = Base + "/Auth/Refresh";
        }
    }
}

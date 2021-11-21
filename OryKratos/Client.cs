using System;
using Ory.Kratos.Client.Api;

namespace OryKratos
{
    public static class Client
    {
        public static void Authenticate()
        {
            var basePath = "https://pedantic-bohr-uex9c29o3l.projects.oryapis.com";
            var alpha = new V0alpha2Api(basePath);
            var flow = alpha.InitializeSelfServiceRegistrationFlowForBrowsers();
        }
    }
}

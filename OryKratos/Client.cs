using System;
using System.Threading.Tasks;
using Ory.Kratos.Client.Api;
using Ory.Kratos.Client.Model;

namespace OryKratos
{
    public class Client
    {
        private readonly static string basePath = "https://pedantic-bohr-uex9c29o3l.projects.oryapis.com";
        private readonly V0alpha2Api v0Alpha2Api;

        public Client()
        {
            v0Alpha2Api = new V0alpha2Api(basePath);
        }

        public async Task<(string, bool)> LoginUser(string email, string password)
        {
            try
            {
                var flow = await v0Alpha2Api.InitializeSelfServiceLoginFlowWithoutBrowserAsync();
                var login = await v0Alpha2Api.SubmitSelfServiceLoginFlowAsync(
                    flow: flow.Id,
                    kratosSubmitSelfServiceLoginFlowBody: new KratosSubmitSelfServiceLoginFlowBody(
                        new KratosSubmitSelfServiceLoginFlowWithPasswordMethodBody(csrfToken: "", method: "password", password: "das", passwordIdentifier: email)
                    )
                );

                return (login.SessionToken, true);
            }
            catch (Exception e)
            {
                return (null, false);
            }
        }
    }
}

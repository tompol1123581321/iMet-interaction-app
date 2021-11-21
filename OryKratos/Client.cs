using System;
using System.Threading.Tasks;
using Ory.Kratos.Client.Api;
using Ory.Kratos.Client.Model;

namespace OryKratos
{
    public class Client
    {
        private readonly static string basePath = "https://pedantic-bohr-uex9c29o3l.projects.oryapis.com";
        private readonly V0alpha2Api alphaAPI;

        public Client()
        {
            alphaAPI = new V0alpha2Api(basePath);
        }

        public async Task<string> LoginUser(string email, string password)
        {
            try
            {
                var flow = await alphaAPI.InitializeSelfServiceLoginFlowWithoutBrowserAsync();
                var login = await alphaAPI.SubmitSelfServiceLoginFlowAsync(
                    flow: flow.Id,
                    kratosSubmitSelfServiceLoginFlowBody: new KratosSubmitSelfServiceLoginFlowBody(
                        new KratosSubmitSelfServiceLoginFlowWithPasswordMethodBody(csrfToken: "", method: "password", password: password, passwordIdentifier: email)
                    )
                );

                return login.SessionToken;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public async Task<bool> RegisterUser(string email, string password)
        {
            try
            {
                var traits = new
                {
                    email = email
                };

                var flow = await alphaAPI.InitializeSelfServiceRegistrationFlowWithoutBrowserAsync();
                var register = await alphaAPI.SubmitSelfServiceRegistrationFlowAsync(
                    flow.Id,
                    new KratosSubmitSelfServiceRegistrationFlowBody(
                        new KratosSubmitSelfServiceRegistrationFlowWithPasswordMethodBody(csrfToken: "", method: "password", password: password, traits: traits)
                    )
                );

                return true;
            }
            catch (Exception e)
            {
                return false;
            }
        }
    }
}

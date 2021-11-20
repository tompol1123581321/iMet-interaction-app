using Contracts.User;
using System;

namespace Contracts.Interaction
{
    public class InteractionModel
    {
        public long Id { get; set; }
        public InteractionType Type { get; set; }
        public DateTime Created { get; set; }
        public UserModel User { get; set; }
        public UserModel Target { get; set; }
    }
}

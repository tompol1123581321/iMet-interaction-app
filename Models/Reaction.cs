using Contracts.Reaction;
using System;

namespace Models
{
    public class Reaction
    {
        public long ReactionId { get; set; }
        public long UserId { get; set; }
        public long InteractionId { get; set; }
        public ReactionType Type { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Deleted { get; set; }
    }
}

/*
 create table Reactions(
	reaction_id bigint,
	user_id int not null,
	interaction_id int not null,
	type int not null,
	created timestamp not null,
	deleted timestamp,
	
	primary key(reaction_id)
);*/
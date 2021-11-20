using Contracts.Interaction;
using System;
using System.Collections.Generic;

namespace Models
{
    // 6jYhfGBF5Wjl1CwsPpfu
    public class Interaction
    {
        public long InteractionId { get; set; }
        public User User { get; set; }
        public long UserId { get; set; }
        public User Target { get; set; }
        public long TargetId { get; set; }
        public InteractionType Type { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Deleted { get; set; }

        public List<Reaction> Reactions { get; set; }
    }
}

/*
 create table Interactions(
	interaction_id bigint,
	user_id int not null,
	target_id int not null,
	type int not null,
	created datetime not null,
	deleted datetime,
	
	primary key(interaction_id)
);
*/
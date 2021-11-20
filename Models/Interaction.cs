using Contracts.Interaction;
using System;

namespace Models
{
    // 6jYhfGBF5Wjl1CwsPpfu
    public class Interaction
    {
        public long InteractionId { get; set; }
        public int UserId { get; set; }
        public int TargetId { get; set; }
        public InteractionType Type { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Deleted { get; set; }
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
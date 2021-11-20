using System;
using System.Collections.Generic;

namespace Models
{
    public class User
    {
        public long UserId { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Deleted { get; set; }

        public List<Interaction> Interactions { get; set; }

    }
}


/*
 create table Users(
	user_id int,
	email varchar(128) not null,
	first_name varchar(64),
	last_name varchar(64),
    password nvarchar(128),
	created datetime not null,
	deleted datetime,
	
	primary key(user_id)
);
*/
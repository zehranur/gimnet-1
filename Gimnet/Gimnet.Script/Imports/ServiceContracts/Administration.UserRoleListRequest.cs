
namespace Gimnet.Administration
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class UserRoleListRequest : ServiceRequest
    {
        public Int32? UserID { get; set; }
    }
    
}


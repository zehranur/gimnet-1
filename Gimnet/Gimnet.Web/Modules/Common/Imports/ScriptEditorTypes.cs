
using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace Gimnet.Administration
{
    public partial class PermissionCheckEditorAttribute : CustomEditorAttribute
    {
        public PermissionCheckEditorAttribute()
            : base("Gimnet.Administration.PermissionCheckEditor")
        {
        }
    }

    public partial class PermissionModuleEditorAttribute : CustomEditorAttribute
    {
        public PermissionModuleEditorAttribute()
            : base("Gimnet.Administration.PermissionModuleEditor")
        {
        }
    }

    public partial class RoleCheckEditorAttribute : CustomEditorAttribute
    {
        public RoleCheckEditorAttribute()
            : base("Gimnet.Administration.RoleCheckEditor")
        {
        }
    }
}

namespace Gimnet.Common
{
    public partial class LanguageSelectionAttribute : CustomEditorAttribute
    {
        public LanguageSelectionAttribute()
            : base("Gimnet.Common.LanguageSelection")
        {
        }
    }
}


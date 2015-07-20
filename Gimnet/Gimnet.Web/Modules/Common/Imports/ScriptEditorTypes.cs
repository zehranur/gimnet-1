
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

namespace Gimnet.Duyuru.Duyuru
{
    public partial class NotEditorAttribute : CustomEditorAttribute
    {
        public NotEditorAttribute()
            : base("Gimnet.Duyuru.Duyuru.NotEditor")
        {
        }
    }
}

namespace Gimnet.Sertifika.Firma
{
    public partial class FirmaLookupEditorAttribute : CustomEditorAttribute
    {
        public FirmaLookupEditorAttribute()
            : base("Gimnet.Sertifika.Firma.FirmaLookupEditor")
        {
        }
    }
}

namespace Gimnet.Sertifika.Kategori
{
    public partial class KategoriLookupEditorAttribute : CustomEditorAttribute
    {
        public KategoriLookupEditorAttribute()
            : base("Gimnet.Sertifika.Kategori.KategoriLookupEditor")
        {
        }
    }
}

namespace Serenity.ComponentModel
{
    public partial class HtmlBasicContentEditorAttribute : CustomEditorAttribute
    {
        public HtmlBasicContentEditorAttribute()
            : base("Serenity.HtmlBasicContentEditor")
        {
        }
    
        public Int32 Cols
        {
            get { return GetOption<Int32>("cols"); }
            set { SetOption("cols", value); }
        }
    
        public Int32 Rows
        {
            get { return GetOption<Int32>("rows"); }
            set { SetOption("rows", value); }
        }
    }
}


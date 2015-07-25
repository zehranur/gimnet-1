
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

namespace Gimnet.Sertifika
{
    public partial class FirmaLogoUploadEditorAttribute : CustomEditorAttribute
    {
        public FirmaLogoUploadEditorAttribute()
            : base("Gimnet.Sertifika.FirmaLogoUploadEditor")
        {
        }
    
        public Int32 MaxHeight
        {
            get { return GetOption<Int32>("maxHeight"); }
            set { SetOption("maxHeight", value); }
        }
    
        public Int32 MaxSize
        {
            get { return GetOption<Int32>("maxSize"); }
            set { SetOption("maxSize", value); }
        }
    
        public Int32 MaxWidth
        {
            get { return GetOption<Int32>("maxWidth"); }
            set { SetOption("maxWidth", value); }
        }
    
        public Int32 MinHeight
        {
            get { return GetOption<Int32>("minHeight"); }
            set { SetOption("minHeight", value); }
        }
    
        public Int32 MinSize
        {
            get { return GetOption<Int32>("minSize"); }
            set { SetOption("minSize", value); }
        }
    
        public Int32 MinWidth
        {
            get { return GetOption<Int32>("minWidth"); }
            set { SetOption("minWidth", value); }
        }
    
        public String OriginalNameProperty
        {
            get { return GetOption<String>("originalNameProperty"); }
            set { SetOption("originalNameProperty", value); }
        }
    
        public String UrlPrefix
        {
            get { return GetOption<String>("urlPrefix"); }
            set { SetOption("urlPrefix", value); }
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

    public partial class MultipleImageUploadEditorAttribute : CustomEditorAttribute
    {
        public MultipleImageUploadEditorAttribute()
            : base("Serenity.MultipleImageUploadEditor")
        {
        }
    
        public Boolean JsonEncodeValue
        {
            get { return GetOption<Boolean>("jsonEncodeValue"); }
            set { SetOption("jsonEncodeValue", value); }
        }
    
        public Int32 MaxHeight
        {
            get { return GetOption<Int32>("maxHeight"); }
            set { SetOption("maxHeight", value); }
        }
    
        public Int32 MaxSize
        {
            get { return GetOption<Int32>("maxSize"); }
            set { SetOption("maxSize", value); }
        }
    
        public Int32 MaxWidth
        {
            get { return GetOption<Int32>("maxWidth"); }
            set { SetOption("maxWidth", value); }
        }
    
        public Int32 MinHeight
        {
            get { return GetOption<Int32>("minHeight"); }
            set { SetOption("minHeight", value); }
        }
    
        public Int32 MinSize
        {
            get { return GetOption<Int32>("minSize"); }
            set { SetOption("minSize", value); }
        }
    
        public Int32 MinWidth
        {
            get { return GetOption<Int32>("minWidth"); }
            set { SetOption("minWidth", value); }
        }
    
        public String OriginalNameProperty
        {
            get { return GetOption<String>("originalNameProperty"); }
            set { SetOption("originalNameProperty", value); }
        }
    
        public String UrlPrefix
        {
            get { return GetOption<String>("urlPrefix"); }
            set { SetOption("urlPrefix", value); }
        }
    }
}


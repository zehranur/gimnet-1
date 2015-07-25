
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
        public const string Key = "Gimnet.Administration.PermissionCheckEditor";
    
        public PermissionCheckEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class PermissionModuleEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Gimnet.Administration.PermissionModuleEditor";
    
        public PermissionModuleEditorAttribute()
            : base(Key)
        {
        }
    }

    public partial class RoleCheckEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Gimnet.Administration.RoleCheckEditor";
    
        public RoleCheckEditorAttribute()
            : base(Key)
        {
        }
    }
}

namespace Gimnet.Common
{
    public partial class LanguageSelectionAttribute : CustomEditorAttribute
    {
        public const string Key = "Gimnet.Common.LanguageSelection";
    
        public LanguageSelectionAttribute()
            : base(Key)
        {
        }
    }
}

namespace Gimnet.Sertifika
{
    public partial class FirmaLogoUploadEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Gimnet.Sertifika.FirmaLogoUploadEditor";
    
        public FirmaLogoUploadEditorAttribute()
            : base(Key)
        {
        }
    
        public Boolean AllowNonImage
        {
            get { return GetOption<Boolean>("allowNonImage"); }
            set { SetOption("allowNonImage", value); }
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

    public partial class SertifikaResimleriUploadEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Gimnet.Sertifika.SertifikaResimleriUploadEditor";
    
        public SertifikaResimleriUploadEditorAttribute()
            : base(Key)
        {
        }
    
        public Boolean AllowNonImage
        {
            get { return GetOption<Boolean>("allowNonImage"); }
            set { SetOption("allowNonImage", value); }
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

namespace Gimnet.Sertifika.Firma
{
    public partial class FirmaLookupEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Gimnet.Sertifika.Firma.FirmaLookupEditor";
    
        public FirmaLookupEditorAttribute()
            : base(Key)
        {
        }
    }
}

namespace Gimnet.Sertifika.Kategori
{
    public partial class KategoriLookupEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Gimnet.Sertifika.Kategori.KategoriLookupEditor";
    
        public KategoriLookupEditorAttribute()
            : base(Key)
        {
        }
    }
}

namespace Serenity.ComponentModel
{
    public partial class HtmlBasicContentEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "Serenity.HtmlBasicContentEditor";
    
        public HtmlBasicContentEditorAttribute()
            : base(Key)
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


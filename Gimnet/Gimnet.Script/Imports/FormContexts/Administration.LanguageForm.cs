
namespace Gimnet.Administration
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;
    using Gimnet.Sertifika;
    using Gimnet.Sertifika.Kategori;
    using Gimnet.Sertifika.Firma;

    public partial class LanguageForm : PrefixedContext
    {
        public LanguageForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor LanguageId { get { return ById<StringEditor>("LanguageId"); } }
        public StringEditor LanguageName { get { return ById<StringEditor>("LanguageName"); } }
    }
}


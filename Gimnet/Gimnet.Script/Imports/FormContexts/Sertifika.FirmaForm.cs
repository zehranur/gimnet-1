
namespace Gimnet.Sertifika
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class FirmaForm : PrefixedContext
    {
        public FirmaForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor FirmaAdi { get { return ById<StringEditor>("FirmaAdi"); } }
        public ImageUploadEditor KucukLogo { get { return ById<ImageUploadEditor>("KucukLogo"); } }
        public StringEditor KonumSehir { get { return ById<StringEditor>("KonumSehir"); } }
        public StringEditor Telefon { get { return ById<StringEditor>("Telefon"); } }
        public StringEditor WebSayfasi { get { return ById<StringEditor>("WebSayfasi"); } }
        public StringEditor IletisimEmail { get { return ById<StringEditor>("IletisimEmail"); } }
    }
}


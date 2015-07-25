
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
        [InlineConstant] public const string FormKey = "Sertifika.Firma";
    
        public FirmaForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor FirmaAdi { get { return ById<StringEditor>("FirmaAdi"); } }
        public StringEditor KucukLogo { get { return ById<StringEditor>("KucukLogo"); } }
        public StringEditor OrtaLogo { get { return ById<StringEditor>("OrtaLogo"); } }
        public FirmaLogoUploadEditor BuyukLogo { get { return ById<FirmaLogoUploadEditor>("BuyukLogo"); } }
        public StringEditor KonumSehir { get { return ById<StringEditor>("KonumSehir"); } }
        public StringEditor Telefon { get { return ById<StringEditor>("Telefon"); } }
        public StringEditor WebSayfasi { get { return ById<StringEditor>("WebSayfasi"); } }
        public StringEditor IletisimEmail { get { return ById<StringEditor>("IletisimEmail"); } }
        public EnumEditor Durum { get { return ById<EnumEditor>("Durum"); } }
    }
}


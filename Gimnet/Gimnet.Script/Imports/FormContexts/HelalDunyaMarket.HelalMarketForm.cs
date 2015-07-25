
namespace Gimnet.HelalDunyaMarket
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    public partial class HelalMarketForm : PrefixedContext
    {
        [InlineConstant] public const string FormKey = "HelalDunyaMarket.HelalMarket";
    
        public HelalMarketForm(string idPrefix) : base(idPrefix) {}
    
        public StringEditor Adi { get { return ById<StringEditor>("Adi"); } }
        public TextAreaEditor AcikAdres { get { return ById<TextAreaEditor>("AcikAdres"); } }
        public StringEditor AdresAciklama { get { return ById<StringEditor>("AdresAciklama"); } }
        public StringEditor SorumluKisi { get { return ById<StringEditor>("SorumluKisi"); } }
        public StringEditor Telefon1 { get { return ById<StringEditor>("Telefon1"); } }
        public StringEditor Telefon2 { get { return ById<StringEditor>("Telefon2"); } }
        public StringEditor Koordinat { get { return ById<StringEditor>("Koordinat"); } }
        public DateEditor EklemeTarihi { get { return ById<DateEditor>("EklemeTarihi"); } }
        public DateEditor GuncellemeTarihi { get { return ById<DateEditor>("GuncellemeTarihi"); } }
    }
}


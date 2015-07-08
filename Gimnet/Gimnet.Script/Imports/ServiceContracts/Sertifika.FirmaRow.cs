
namespace Gimnet.Sertifika
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class FirmaRow
    {
        public Int32? Id { get; set; }
        public String FirmaAdi { get; set; }
        public String KucukLogo { get; set; }
        public String OrtaLogo { get; set; }
        public String BuyukLogo { get; set; }
        public String KonumSehir { get; set; }
        public String Telefon { get; set; }
        public String WebSayfasi { get; set; }
        public String IletisimEmail { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string FirmaAdi = "FirmaAdi";
            [InlineConstant] public const string KucukLogo = "KucukLogo";
            [InlineConstant] public const string OrtaLogo = "OrtaLogo";
            [InlineConstant] public const string BuyukLogo = "BuyukLogo";
            [InlineConstant] public const string KonumSehir = "KonumSehir";
            [InlineConstant] public const string Telefon = "Telefon";
            [InlineConstant] public const string WebSayfasi = "WebSayfasi";
            [InlineConstant] public const string IletisimEmail = "IletisimEmail";
        }
    }
    
}


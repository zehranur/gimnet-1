
namespace Gimnet.HelalDunyaMarket
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class HelalMarketRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "Adi";
        [InlineConstant] public const string LocalTextPrefix = "HelalDunyaMarket.HelalMarket";
    
        public Int32? Id { get; set; }
        public String Adi { get; set; }
        public String AcikAdres { get; set; }
        public String AdresAciklama { get; set; }
        public String SorumluKisi { get; set; }
        public String Telefon1 { get; set; }
        public String Telefon2 { get; set; }
        public String Koordinat { get; set; }
        public String EklemeTarihi { get; set; }
        public String GuncellemeTarihi { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string Adi = "Adi";
            [InlineConstant] public const string AcikAdres = "AcikAdres";
            [InlineConstant] public const string AdresAciklama = "AdresAciklama";
            [InlineConstant] public const string SorumluKisi = "SorumluKisi";
            [InlineConstant] public const string Telefon1 = "Telefon1";
            [InlineConstant] public const string Telefon2 = "Telefon2";
            [InlineConstant] public const string Koordinat = "Koordinat";
            [InlineConstant] public const string EklemeTarihi = "EklemeTarihi";
            [InlineConstant] public const string GuncellemeTarihi = "GuncellemeTarihi";
        }
    }
    
}


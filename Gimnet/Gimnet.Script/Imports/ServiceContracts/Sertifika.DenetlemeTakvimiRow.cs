
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
    public partial class DenetlemeTakvimiRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "Denetciler";
        [InlineConstant] public const string LocalTextPrefix = "Sertifika.DenetlemeTakvimi";
    
        public Int32? Id { get; set; }
        public Int32? FirmaId { get; set; }
        public String DenetlemeTarihi { get; set; }
        public String Denetciler { get; set; }
        public Int32? Durumu { get; set; }
        public String Sonuc { get; set; }
        public String PlanananTarih { get; set; }
        public String FirmaFirmaAdi { get; set; }
        public String FirmaKucukLogo { get; set; }
        public String FirmaOrtaLogo { get; set; }
        public String FirmaBuyukLogo { get; set; }
        public String FirmaKonumSehir { get; set; }
        public String FirmaTelefon { get; set; }
        public String FirmaWebSayfasi { get; set; }
        public String FirmaIletisimEmail { get; set; }
        public Int32? FirmaDurum { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string FirmaId = "FirmaId";
            [InlineConstant] public const string DenetlemeTarihi = "DenetlemeTarihi";
            [InlineConstant] public const string Denetciler = "Denetciler";
            [InlineConstant] public const string Durumu = "Durumu";
            [InlineConstant] public const string Sonuc = "Sonuc";
            [InlineConstant] public const string PlanananTarih = "PlanananTarih";
            [InlineConstant] public const string FirmaFirmaAdi = "FirmaFirmaAdi";
            [InlineConstant] public const string FirmaKucukLogo = "FirmaKucukLogo";
            [InlineConstant] public const string FirmaOrtaLogo = "FirmaOrtaLogo";
            [InlineConstant] public const string FirmaBuyukLogo = "FirmaBuyukLogo";
            [InlineConstant] public const string FirmaKonumSehir = "FirmaKonumSehir";
            [InlineConstant] public const string FirmaTelefon = "FirmaTelefon";
            [InlineConstant] public const string FirmaWebSayfasi = "FirmaWebSayfasi";
            [InlineConstant] public const string FirmaIletisimEmail = "FirmaIletisimEmail";
            [InlineConstant] public const string FirmaDurum = "FirmaDurum";
        }
    }
    
}


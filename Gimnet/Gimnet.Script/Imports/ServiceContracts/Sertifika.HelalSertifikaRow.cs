
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
    public partial class HelalSertifikaRow
    {
        public Int32? Id { get; set; }
        public Int32? KategoriId { get; set; }
        public Int32? FirmaId { get; set; }
        public String Marka { get; set; }
        public String İlkBasvuruTarihi { get; set; }
        public String YenilemeTarihi { get; set; }
        public String SertifikaKapsami { get; set; }
        public Int16? Durum { get; set; }
        public String KapsamDisi { get; set; }
        public String BitisTarihi { get; set; }
        public String İptalAciklamasi { get; set; }
        public String KategoriKategoriAdi { get; set; }
        public String KategoriEklenmeTarihi { get; set; }
        public String FirmaFirmaAdi { get; set; }
        public String FirmaKucukLogo { get; set; }
        public String FirmaOrtaLogo { get; set; }
        public String FirmaBuyukLogo { get; set; }
        public String FirmaKonumSehir { get; set; }
        public String FirmaTelefon { get; set; }
        public String FirmaWebSayfasi { get; set; }
        public String FirmaIletisimEmail { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string KategoriId = "KategoriId";
            [InlineConstant] public const string FirmaId = "FirmaId";
            [InlineConstant] public const string Marka = "Marka";
            [InlineConstant] public const string İlkBasvuruTarihi = "İlkBasvuruTarihi";
            [InlineConstant] public const string YenilemeTarihi = "YenilemeTarihi";
            [InlineConstant] public const string SertifikaKapsami = "SertifikaKapsami";
            [InlineConstant] public const string Durum = "Durum";
            [InlineConstant] public const string KapsamDisi = "KapsamDisi";
            [InlineConstant] public const string BitisTarihi = "BitisTarihi";
            [InlineConstant] public const string İptalAciklamasi = "İptalAciklamasi";
            [InlineConstant] public const string KategoriKategoriAdi = "KategoriKategoriAdi";
            [InlineConstant] public const string KategoriEklenmeTarihi = "KategoriEklenmeTarihi";
            [InlineConstant] public const string FirmaFirmaAdi = "FirmaFirmaAdi";
            [InlineConstant] public const string FirmaKucukLogo = "FirmaKucukLogo";
            [InlineConstant] public const string FirmaOrtaLogo = "FirmaOrtaLogo";
            [InlineConstant] public const string FirmaBuyukLogo = "FirmaBuyukLogo";
            [InlineConstant] public const string FirmaKonumSehir = "FirmaKonumSehir";
            [InlineConstant] public const string FirmaTelefon = "FirmaTelefon";
            [InlineConstant] public const string FirmaWebSayfasi = "FirmaWebSayfasi";
            [InlineConstant] public const string FirmaIletisimEmail = "FirmaIletisimEmail";
        }
    }
    
}


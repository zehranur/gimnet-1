
namespace Gimnet.Sertifika.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("HelalSertifika"), InstanceName("HelalSertifika"), TwoLevelCached]
    [ReadPermission("Default")]
    [ModifyPermission("Default")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class HelalSertifikaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Kategori Id"), NotNull, ForeignKey("Kategori", "Id"), LeftJoin("jKategori")]
        public Int32? KategoriId
        {
            get { return Fields.KategoriId[this]; }
            set { Fields.KategoriId[this] = value; }
        }

        [DisplayName("Firma Id"), NotNull, ForeignKey("Firma", "Id"), LeftJoin("jFirma")]
        public Int32? FirmaId
        {
            get { return Fields.FirmaId[this]; }
            set { Fields.FirmaId[this] = value; }
        }

        [DisplayName("Marka"), Size(100), NotNull, QuickSearch]
        public String Marka
        {
            get { return Fields.Marka[this]; }
            set { Fields.Marka[this] = value; }
        }

        [DisplayName("İlk Basvuru Tarihi"), NotNull]
        public DateTime? İlkBasvuruTarihi
        {
            get { return Fields.İlkBasvuruTarihi[this]; }
            set { Fields.İlkBasvuruTarihi[this] = value; }
        }

        [DisplayName("Yenileme Tarihi"), NotNull]
        public DateTime? YenilemeTarihi
        {
            get { return Fields.YenilemeTarihi[this]; }
            set { Fields.YenilemeTarihi[this] = value; }
        }

        [DisplayName("Sertifika Kapsamı"), TextAreaEditor, NotNull]
        public String SertifikaKapsami
        {
            get { return Fields.SertifikaKapsami[this]; }
            set { Fields.SertifikaKapsami[this] = value; }
        }

        [DisplayName("Durum"), NotNull]
        public Int16? Durum
        {
            get { return Fields.Durum[this]; }
            set { Fields.Durum[this] = value; }
        }

        [DisplayName("Kapsam Dışı")]
        public String KapsamDisi
        {
            get { return Fields.KapsamDisi[this]; }
            set { Fields.KapsamDisi[this] = value; }
        }

        [DisplayName("Bitiş Tarihi")]
        public DateTime? BitisTarihi
        {
            get { return Fields.BitisTarihi[this]; }
            set { Fields.BitisTarihi[this] = value; }
        }

        [DisplayName("İptal Açıklaması"), Size(256)]
        public String İptalAciklamasi
        {
            get { return Fields.İptalAciklamasi[this]; }
            set { Fields.İptalAciklamasi[this] = value; }
        }

        [DisplayName("Kategori Kategori Adı"), Expression("jKategori.KategoriAdi")]
        public String KategoriKategoriAdi
        {
            get { return Fields.KategoriKategoriAdi[this]; }
            set { Fields.KategoriKategoriAdi[this] = value; }
        }

        [DisplayName("Kategori Eklenme Tarihi"), Expression("jKategori.EklenmeTarihi")]
        public DateTime? KategoriEklenmeTarihi
        {
            get { return Fields.KategoriEklenmeTarihi[this]; }
            set { Fields.KategoriEklenmeTarihi[this] = value; }
        }

        [DisplayName("Firma Firma Adı"), Expression("jFirma.FirmaAdi")]
        public String FirmaFirmaAdi
        {
            get { return Fields.FirmaFirmaAdi[this]; }
            set { Fields.FirmaFirmaAdi[this] = value; }
        }

        [DisplayName("Firma Küçük Logo"), Expression("jFirma.KucukLogo")]
        public String FirmaKucukLogo
        {
            get { return Fields.FirmaKucukLogo[this]; }
            set { Fields.FirmaKucukLogo[this] = value; }
        }

        [DisplayName("Firma Orta Logo"), Expression("jFirma.OrtaLogo")]
        public String FirmaOrtaLogo
        {
            get { return Fields.FirmaOrtaLogo[this]; }
            set { Fields.FirmaOrtaLogo[this] = value; }
        }

        [DisplayName("Firma Büyük Logo"), Expression("jFirma.BuyukLogo")]
        public String FirmaBuyukLogo
        {
            get { return Fields.FirmaBuyukLogo[this]; }
            set { Fields.FirmaBuyukLogo[this] = value; }
        }

        [DisplayName("Firma Konum Şehir"), Expression("jFirma.KonumSehir")]
        public String FirmaKonumSehir
        {
            get { return Fields.FirmaKonumSehir[this]; }
            set { Fields.FirmaKonumSehir[this] = value; }
        }

        [DisplayName("Firma Telefon"), Expression("jFirma.Telefon")]
        public String FirmaTelefon
        {
            get { return Fields.FirmaTelefon[this]; }
            set { Fields.FirmaTelefon[this] = value; }
        }

        [DisplayName("Firma Web Sayfası"), Expression("jFirma.WebSayfasi")]
        public String FirmaWebSayfasi
        {
            get { return Fields.FirmaWebSayfasi[this]; }
            set { Fields.FirmaWebSayfasi[this] = value; }
        }

        [DisplayName("Firma İletişim Email"), Expression("jFirma.IletisimEmail")]
        public String FirmaIletisimEmail
        {
            get { return Fields.FirmaIletisimEmail[this]; }
            set { Fields.FirmaIletisimEmail[this] = value; }
        }

        [DisplayName("Sertifika Resimleri")]
        public String SertifikaResimleri
        {
            get { return Fields.SertifikaResimleri[this]; }
            set { Fields.SertifikaResimleri[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Marka; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public HelalSertifikaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field Id;
            public readonly Int32Field KategoriId;
            public readonly Int32Field FirmaId;
            public readonly StringField Marka;
            public readonly DateTimeField İlkBasvuruTarihi;
            public readonly DateTimeField YenilemeTarihi;
            public readonly StringField SertifikaKapsami;
            public readonly Int16Field Durum;
            public readonly StringField KapsamDisi;
            public readonly DateTimeField BitisTarihi;
            public readonly StringField İptalAciklamasi;

            public readonly StringField KategoriKategoriAdi;
            public readonly DateTimeField KategoriEklenmeTarihi;


            public readonly StringField FirmaFirmaAdi;
            public readonly StringField FirmaKucukLogo;
            public readonly StringField FirmaOrtaLogo;
            public readonly StringField FirmaBuyukLogo;
            public readonly StringField FirmaKonumSehir;
            public readonly StringField FirmaTelefon;
            public readonly StringField FirmaWebSayfasi;
            public readonly StringField FirmaIletisimEmail;
            public readonly StringField SertifikaResimleri;


            public RowFields()
                : base("HelalSertifika")
            {
                LocalTextPrefix = "Sertifika.HelalSertifika";
            }
        }
    }
}
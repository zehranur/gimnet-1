
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

        [DisplayName("Son Yenileme Tarihi"), NotNull]
        public DateTime? SonYenilemeTarihi
        {
            get { return Fields.SonYenilemeTarihi[this]; }
            set { Fields.SonYenilemeTarihi[this] = value; }
        }

        [DisplayName("Sertifika Kapsami"), NotNull]
        public String SertifikaKapsami
        {
            get { return Fields.SertifikaKapsami[this]; }
            set { Fields.SertifikaKapsami[this] = value; }
        }

        [DisplayName("Uyari"), Size(256)]
        public String Uyari
        {
            get { return Fields.Uyari[this]; }
            set { Fields.Uyari[this] = value; }
        }

        [DisplayName("Kategori Kategori Adi"), Expression("jKategori.KategoriAdi")]
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

        [DisplayName("Firma Firma Adi"), Expression("jFirma.FirmaAdi")]
        public String FirmaFirmaAdi
        {
            get { return Fields.FirmaFirmaAdi[this]; }
            set { Fields.FirmaFirmaAdi[this] = value; }
        }

        [DisplayName("Firma Kucuk Logo"), Expression("jFirma.KucukLogo")]
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

        [DisplayName("Firma Buyuk Logo"), Expression("jFirma.BuyukLogo")]
        public String FirmaBuyukLogo
        {
            get { return Fields.FirmaBuyukLogo[this]; }
            set { Fields.FirmaBuyukLogo[this] = value; }
        }

        [DisplayName("Firma Konum Sehir"), Expression("jFirma.KonumSehir")]
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

        [DisplayName("Firma Web Sayfasi"), Expression("jFirma.WebSayfasi")]
        public String FirmaWebSayfasi
        {
            get { return Fields.FirmaWebSayfasi[this]; }
            set { Fields.FirmaWebSayfasi[this] = value; }
        }

        [DisplayName("Firma Iletisim Email"), Expression("jFirma.IletisimEmail")]
        public String FirmaIletisimEmail
        {
            get { return Fields.FirmaIletisimEmail[this]; }
            set { Fields.FirmaIletisimEmail[this] = value; }
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
            public readonly DateTimeField SonYenilemeTarihi;
            public readonly StringField SertifikaKapsami;
            public readonly StringField Uyari;

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


            public RowFields()
                : base("HelalSertifika")
            {
                LocalTextPrefix = "Sertifika.HelalSertifika";
            }
        }
    }
}
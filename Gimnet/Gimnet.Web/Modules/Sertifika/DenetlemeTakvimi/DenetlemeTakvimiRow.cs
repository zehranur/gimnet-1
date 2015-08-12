
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

    [ConnectionKey("Default"), DisplayName("DenetlemeTakvimi"), InstanceName("DenetlemeTakvimi"), TwoLevelCached]
    [ReadPermission("Default")]
    [ModifyPermission("Default")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class DenetlemeTakvimiRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Firma Id"), NotNull, ForeignKey("[dbo].Firma", "Id"), LeftJoin("jFirma")]
        public Int32? FirmaId
        {
            get { return Fields.FirmaId[this]; }
            set { Fields.FirmaId[this] = value; }
        }

        [DisplayName("Denetleme Tarihi"), NotNull]
        public DateTime? DenetlemeTarihi
        {
            get { return Fields.DenetlemeTarihi[this]; }
            set { Fields.DenetlemeTarihi[this] = value; }
        }

        [DisplayName("Denetciler"), Size(1000), TextAreaEditor, NotNull, QuickSearch]
        public String Denetciler
        {
            get { return Fields.Denetciler[this]; }
            set { Fields.Denetciler[this] = value; }
        }

        [DisplayName("Durumu"), NotNull]
        public DenetlemeDurumIds Durumu
        {
            get { return (DenetlemeDurumIds)Fields.Durumu[this]; }
            set { Fields.Durumu[this] = (long)value; }
        }

        [DisplayName("Sonuc"), TextAreaEditor, NotNull]
        public String Sonuc
        {
            get { return Fields.Sonuc[this]; }
            set { Fields.Sonuc[this] = value; }
        }

        [DisplayName("Plananan Tarih"), NotNull]
        public DateTime? PlanananTarih
        {
            get { return Fields.PlanananTarih[this]; }
            set { Fields.PlanananTarih[this] = value; }
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

        [DisplayName("Firma Durum"), Expression("jFirma.Durum")]
        public Int32? FirmaDurum
        {
            get { return Fields.FirmaDurum[this]; }
            set { Fields.FirmaDurum[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Denetciler; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DenetlemeTakvimiRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field Id;
            public readonly Int32Field FirmaId;
            public readonly DateTimeField DenetlemeTarihi;
            public readonly StringField Denetciler;
            public readonly Int64Field Durumu;
            public readonly StringField Sonuc;
            public readonly DateTimeField PlanananTarih;

            public readonly StringField FirmaFirmaAdi;
            public readonly StringField FirmaKucukLogo;
            public readonly StringField FirmaOrtaLogo;
            public readonly StringField FirmaBuyukLogo;
            public readonly StringField FirmaKonumSehir;
            public readonly StringField FirmaTelefon;
            public readonly StringField FirmaWebSayfasi;
            public readonly StringField FirmaIletisimEmail;
            public readonly Int32Field FirmaDurum;

            public RowFields()
                : base("[dbo].DenetlemeTakvimi")
            {
                LocalTextPrefix = "Sertifika.DenetlemeTakvimi";
            }
        }
    }
}
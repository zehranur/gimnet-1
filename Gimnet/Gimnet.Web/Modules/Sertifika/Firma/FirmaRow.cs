
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

    [ConnectionKey("Default"), DisplayName("Firma"), InstanceName("Firma"), TwoLevelCached]
    [ReadPermission("Default")]
    [ModifyPermission("Default")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class FirmaRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Firma Adı"), Size(100), NotNull, QuickSearch]
        public String FirmaAdi
        {
            get { return Fields.FirmaAdi[this]; }
            set { Fields.FirmaAdi[this] = value; }
        }

        [DisplayName("Küçük Logo"), Size(256)]
        public String KucukLogo
        {
            get { return Fields.KucukLogo[this]; }
            set { Fields.KucukLogo[this] = value; }
        }

        [DisplayName("Orta Logo"), Size(256)]
        public String OrtaLogo
        {
            get { return Fields.OrtaLogo[this]; }
            set { Fields.OrtaLogo[this] = value; }
        }

        [DisplayName("Büyük Logo"), Size(256), NotNull]
        public String BuyukLogo
        {
            get { return Fields.BuyukLogo[this]; }
            set { Fields.BuyukLogo[this] = value; }
        }

        [DisplayName("Konum Şehir"), Size(100), NotNull]
        public String KonumSehir
        {
            get { return Fields.KonumSehir[this]; }
            set { Fields.KonumSehir[this] = value; }
        }

        [DisplayName("Telefon"), Size(20)]
        public String Telefon
        {
            get { return Fields.Telefon[this]; }
            set { Fields.Telefon[this] = value; }
        }

        [DisplayName("Web Sayfası"), Size(50)]
        public String WebSayfasi
        {
            get { return Fields.WebSayfasi[this]; }
            set { Fields.WebSayfasi[this] = value; }
        }

        [DisplayName("İletişim Email"), Size(50)]
        public String IletisimEmail
        {
            get { return Fields.IletisimEmail[this]; }
            set { Fields.IletisimEmail[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.FirmaAdi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public FirmaRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field Id;
            public readonly StringField FirmaAdi;
            public readonly StringField KucukLogo;
            public readonly StringField OrtaLogo;
            public readonly StringField BuyukLogo;
            public readonly StringField KonumSehir;
            public readonly StringField Telefon;
            public readonly StringField WebSayfasi;
            public readonly StringField IletisimEmail;

            public RowFields()
                : base("Firma")
            {
                LocalTextPrefix = "Sertifika.Firma";
            }
        }
    }
}
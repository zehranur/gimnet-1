
namespace Gimnet.HelalDunyaMarket.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Helal Dünya Marketi"), InstanceName("Helal Market"), TwoLevelCached]
    [ReadPermission("Default")]
    [ModifyPermission("Default")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class HelalMarketRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Şube Adı"), Size(100), NotNull, QuickSearch]
        public String Adi
        {
            get { return Fields.Adi[this]; }
            set { Fields.Adi[this] = value; }
        }

        [DisplayName("Açık Adres"), Size(256), NotNull]
        public String AcikAdres
        {
            get { return Fields.AcikAdres[this]; }
            set { Fields.AcikAdres[this] = value; }
        }

        [DisplayName("Adres Açıklaması"), Size(256)]
        public String AdresAciklama
        {
            get { return Fields.AdresAciklama[this]; }
            set { Fields.AdresAciklama[this] = value; }
        }

        [DisplayName("Sorumlu Kişi"), Size(100)]
        public String SorumluKisi
        {
            get { return Fields.SorumluKisi[this]; }
            set { Fields.SorumluKisi[this] = value; }
        }

        [DisplayName("Telefon1"), Size(20)]
        public String Telefon1
        {
            get { return Fields.Telefon1[this]; }
            set { Fields.Telefon1[this] = value; }
        }

        [DisplayName("Telefon2"), Size(20)]
        public String Telefon2
        {
            get { return Fields.Telefon2[this]; }
            set { Fields.Telefon2[this] = value; }
        }

        [DisplayName("Koordinatlar"), Size(100)]
        public String Koordinat
        {
            get { return Fields.Koordinat[this]; }
            set { Fields.Koordinat[this] = value; }
        }

        [DisplayName("Ekleme Tarihi")]
        [ReadOnly(true)]
        public DateTime? EklemeTarihi
        {
            get { return Fields.EklemeTarihi[this]; }
            set { Fields.EklemeTarihi[this] = value; }
        }

        [DisplayName("Guncelleme Tarihi")]
        [ReadOnly(true)]
        public DateTime? GuncellemeTarihi
        {
            get { return Fields.GuncellemeTarihi[this]; }
            set { Fields.GuncellemeTarihi[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Adi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public HelalMarketRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field Id;
            public readonly StringField Adi;
            public readonly StringField AcikAdres;
            public readonly StringField AdresAciklama;
            public readonly StringField SorumluKisi;
            public readonly StringField Telefon1;
            public readonly StringField Telefon2;
            public readonly StringField Koordinat;
            public readonly DateTimeField EklemeTarihi;
            public readonly DateTimeField GuncellemeTarihi;

            public RowFields()
                : base("HelalMarket")
            {
                LocalTextPrefix = "HelalDunyaMarket.HelalMarket";
            }
        }
    }
}
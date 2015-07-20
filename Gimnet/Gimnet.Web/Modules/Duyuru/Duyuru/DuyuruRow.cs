
namespace Gimnet.Duyuru.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), DisplayName("Duyuru"), InstanceName("Duyuru"), TwoLevelCached]
    [ReadPermission("Default")]
    [ModifyPermission("Default")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class DuyuruRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Baslik"), Size(100), NotNull, QuickSearch]
        public String Baslik
        {
            get { return Fields.Baslik[this]; }
            set { Fields.Baslik[this] = value; }
        }

        [DisplayName("Duyuru Metni"), NotNull]
        public String DuyuruMetni
        {
            get { return Fields.DuyuruMetni[this]; }
            set { Fields.DuyuruMetni[this] = value; }
        }

        [DisplayName("Yayından Kaldırılacağı Tarih")]
        public DateTime? SonTarih
        {
            get { return Fields.SonTarih[this]; }
            set { Fields.SonTarih[this] = value; }
        }

        [DisplayName("Ekleme Tarihi"), NotNull]
        public DateTime? EklemeTarihi
        {
            get { return Fields.EklemeTarihi[this]; }
            set { Fields.EklemeTarihi[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Baslik; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DuyuruRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field Id;
            public readonly StringField Baslik;
            public readonly DateTimeField EklemeTarihi;
            public readonly StringField DuyuruMetni;
            public readonly DateTimeField SonTarih;

            public RowFields()
                : base("Duyuru")
            {
                LocalTextPrefix = "Duyuru.Duyuru";
            }
        }
    }
}
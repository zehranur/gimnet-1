
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

    [ConnectionKey("Default"), DisplayName("Barkod"), InstanceName("Barkod"), TwoLevelCached]
    [ReadPermission("Default")]
    [ModifyPermission("Default")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class BarkodRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Barkod"), Size(25), NotNull, QuickSearch]
        public String Barkod
        {
            get { return Fields.Barkod[this]; }
            set { Fields.Barkod[this] = value; }
        }

        [DisplayName("Sertifika Id"), NotNull]
        public Int32? SertifikaId
        {
            get { return Fields.SertifikaId[this]; }
            set { Fields.SertifikaId[this] = value; }
        }

        [DisplayName("Urun Adi"), Size(256), NotNull]
        public String UrunAdi
        {
            get { return Fields.UrunAdi[this]; }
            set { Fields.UrunAdi[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Barkod; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BarkodRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field Id;
            public readonly StringField Barkod;
            public readonly Int32Field SertifikaId;
            public readonly StringField UrunAdi;

            public RowFields()
                : base("[dbo].Barkod")
            {
                LocalTextPrefix = "Sertifika.Barkod";
            }
        }
    }
}
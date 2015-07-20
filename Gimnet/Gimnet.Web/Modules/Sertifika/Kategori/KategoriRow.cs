
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

    [ConnectionKey("Default"), DisplayName("Kategori"), InstanceName("Kategori"), TwoLevelCached]
    [ReadPermission("Default")]
    [ModifyPermission("Default")]
    [JsonConverter(typeof(JsonRowConverter))]
    public sealed class KategoriRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Kategori Adı"), Size(100), NotNull, QuickSearch]
        public String KategoriAdi
        {
            get { return Fields.KategoriAdi[this]; }
            set { Fields.KategoriAdi[this] = value; }
        }

        [DisplayName("Eklenme Tarihi"), ReadOnly(true)]
        public DateTime? EklenmeTarihi
        {
            get { return Fields.EklenmeTarihi[this]; }
            set { Fields.EklenmeTarihi[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.KategoriAdi; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public KategoriRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public readonly Int32Field Id;
            public readonly StringField KategoriAdi;
            public readonly DateTimeField EklenmeTarihi;

            public RowFields()
                : base("Kategori")
            {
                LocalTextPrefix = "Sertifika.Kategori";
            }
        }
    }
}

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
    public partial class KategoriRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "KategoriAdi";
        [InlineConstant] public const string LocalTextPrefix = "Sertifika.Kategori";
    
        public Int32? Id { get; set; }
        public String KategoriAdi { get; set; }
        public String EklenmeTarihi { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string KategoriAdi = "KategoriAdi";
            [InlineConstant] public const string EklenmeTarihi = "EklenmeTarihi";
        }
    }
    
}


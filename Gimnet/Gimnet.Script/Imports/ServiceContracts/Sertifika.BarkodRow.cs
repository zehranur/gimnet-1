
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
    public partial class BarkodRow
    {
        [InlineConstant] public const string IdProperty = "Id";
        [InlineConstant] public const string NameProperty = "Barkod";
        [InlineConstant] public const string LocalTextPrefix = "Sertifika.Barkod";
    
        public Int32? Id { get; set; }
        public String Barkod { get; set; }
        public Int32? SertifikaId { get; set; }
        public String UrunAdi { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string Barkod = "Barkod";
            [InlineConstant] public const string SertifikaId = "SertifikaId";
            [InlineConstant] public const string UrunAdi = "UrunAdi";
        }
    }
    
}


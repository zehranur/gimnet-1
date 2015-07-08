
namespace Gimnet.Duyuru
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [Imported, Serializable, PreserveMemberCase]
    public partial class DuyuruRow
    {
        public Int32? Id { get; set; }
        public String Baslik { get; set; }
        public String EklemeTarihi { get; set; }
        public String DuyuruMetni { get; set; }
        public String SonTarih { get; set; }
    
        [Imported, PreserveMemberCase]
        public static class Fields
        {
            [InlineConstant] public const string Id = "Id";
            [InlineConstant] public const string Baslik = "Baslik";
            [InlineConstant] public const string EklemeTarihi = "EklemeTarihi";
            [InlineConstant] public const string DuyuruMetni = "DuyuruMetni";
            [InlineConstant] public const string SonTarih = "SonTarih";
        }
    }
    
}


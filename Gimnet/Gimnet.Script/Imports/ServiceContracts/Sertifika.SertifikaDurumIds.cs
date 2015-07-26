
namespace Gimnet.Sertifika
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;

    [EnumKey("Gimnet.Sertifika.SertifikaDurumIds"), PreserveMemberCase]
    public enum SertifikaDurumIds
    {
        None = 0,
        Gecerli = 1,
        SuresiGecmis = 2
    }
    
}


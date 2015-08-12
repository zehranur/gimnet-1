namespace Gimnet.Sertifika.DenetlemeTakvimi
{
    using System;
    using jQueryApi;
    using jQueryApi.UI.Widgets;
    using Serenity;
    using System.Collections.Generic;

    [IdProperty("Id")]
    public class DenetlemeTakvimiGridDialog : TemplatedDialog
    {
        public FirmaRow firma { get; set; }
        public DenetlemeTakvimiGrid DenetlemeTakvimiGrid { get; set; }

        public DenetlemeTakvimiGridDialog()
        {
            DenetlemeTakvimiGrid = new DenetlemeTakvimiGrid(ById("GridDiv"));
        }

        protected override void OnDialogOpen()
        {
            base.OnDialogOpen();

            J(".ui-widget-overlay.ui-front").Last().CSS("opacity", "0.5");
        }

        protected override List<ToolButton> GetToolbarButtons()
        {
            return new List<ToolButton>();
        }

        protected override DialogOptions GetDialogOptions()
        {
            var dialogOptions = base.GetDialogOptions();
            dialogOptions.Resizable = true;
            return dialogOptions;
        }

        protected override string GetTemplateName()
        {
            return "GridDialog";
        }

        public void UpdateTitle()
        {
            if (this.firma == null)
                return;

            element.Dialog().Title = string.Format("{0} Firması İçin Denetleme Zamanları", firma.FirmaAdi);
        }


        public void LoadByIdAndOpenDialog(Int32 firmaID)
        {
            this.FirmaID = firmaID;
            this.DialogOpen();
        }

        public Int32? FirmaID
        {
            get { return firma != null ? this.firma.Id : null; }
            set
            {
                if (this.firma == null || this.firma.Id != value)
                {
                    var firmaID = value;
                    FirmaService.Retrieve(new RetrieveRequest
                    {
                        EntityId = firmaID.Value
                    }, onSuccess: response =>
                    {
                        firma = response.Entity;
                        this.DenetlemeTakvimiGrid.FirmaRow = this.firma;
                        UpdateTitle();
                    });
                }
            }
        }
    }
}

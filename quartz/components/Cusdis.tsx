import { QuartzComponent, QuartzComponentProps } from "./types"

interface Options {
  appId: string
}

export default ((opts: Options) => {
  const Cusdis: QuartzComponent = ({ fileData, displayClass, cfg }: QuartzComponentProps) => {
    const title = fileData.frontmatter?.title ?? "Untitled"
    const pageId = fileData.slug
    const pageUrl = `https://${cfg.baseUrl}/${fileData.slug}`

    return (
      <div class={`cusdis-container ${displayClass ?? ""}`}>
        <div
          id="cusdis_thread"
          data-host="https://cusdis.com"
          data-app-id={opts.appId}
          data-page-id={pageId}
          data-page-url={pageUrl}
          data-page-title={title}
          data-theme="auto"
          style={{ width: "100%", minHeight: "150px", marginTop: "4rem" }}
        ></div>
        <script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
      </div>
    )
  }

  return Cusdis
})
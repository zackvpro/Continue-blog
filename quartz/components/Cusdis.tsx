import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  appId: string
}

export default ((opts?: Options) => { // 1. 这里加个问号，使其变为可选
  const Cusdis: QuartzComponent = ({ fileData, displayClass, cfg }: QuartzComponentProps) => {
    // 2. 如果没有传 opts，提前返回 null 或者报错提示
    if (!opts?.appId) {
      console.warn("Cusdis appId is missing!")
      return null
    }

    const title = fileData.frontmatter?.title ?? "Untitled"
    const pageId = fileData.slug
    const pageUrl = `https://${cfg.baseUrl}/${fileData.slug}`

    return (
      <div class={`cusdis-container ${displayClass ?? ""}`}>
        <div
          id="cusdis_thread"
          data-host="https://cusdis.com"
          data-app-id={opts.appId} // 
          data-page-id={pageId}
          data-page-url={pageUrl}
          data-page-title={title}
          data-theme="auto"
          style={{ width: "100%", minHeight: "150px", marginTop: "4rem" }}
        ></div>

        <script dangerouslySetInnerHTML={{ __html: `
          function initCusdis() {
            const el = document.getElementById('cusdis_thread')
            if (el && window.renderCusdis) {
              window.renderCusdis(el)
            }
          }
          document.addEventListener("nav", initCusdis)
        `}} />
        <script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
      </div>
    )
  }

  return Cusdis
}) satisfies QuartzComponentConstructor 
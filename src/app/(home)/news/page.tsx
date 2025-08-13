import { ExternalLink, BookOpen, Calendar, Users } from "lucide-react";

export default function News() {
  // Define news data in an array
  const newsItems = [
    {
      icon: <BookOpen className="w-5 h-5 text-muted-foreground/60" />,
      date: "2024.9.17",
      title: "Posted LayerX Summer Internship Experience Report!",
      description:
        "Detailed writeup about my experiences and learnings during a 3-month summer internship at LayerX.",
      category: "Internship Report",
      link: "https://zenn.dev/soma_takata/articles/3a5ad127b57e04",
      type: "Blog Post",
    },
    {
      icon: <Users className="w-5 h-5 text-muted-foreground/60" />,
      date: "2024.7.26",
      title:
        "Posted 3-month engineer internship experience report at How Television!",
      description:
        "Documented my experiences and growth during the engineering internship at How Television.",
      category: "Internship Report",
      link: "https://howtv.hatenablog.com/entry/2024/07/26/174358",
      type: "Blog Post",
    },
  ];

  return (
    <div className="flex flex-col p-4">
      {newsItems.map((item, idx) => (
        <div
          key={idx}
          className={
            `flex items-center w-full gap-4 group border-b border-dashed p-6 hover:bg-muted/30 ` +
            (idx === 0 ? "hover:border" : "hover:border-x")
          }
        >
          {/* Main content */}
          <div className="flex items-start gap-4 w-full">
            {/* Icon */}
            <span className="flex items-center text-muted-foreground border-muted-foreground/50 border-dashed justify-center w-10 h-10 bg-background border-1 rounded-full group-hover:bg-background group-hover:text-foreground flex-shrink-0">
              {item.icon}
            </span>

            {/* News information */}
            <div className="w-full">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-600">
                  {item.type}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

              {item.description && (
                <p className="text-sm text-muted-foreground mb-3">
                  {item.description}
                </p>
              )}

              <div className="flex items-center justify-between mt-4">
                {/* Category */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                    {item.category}
                  </span>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-4">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-primary hover:underline"
                    >
                      <ExternalLink size={14} />
                      View Details
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Hover border effect */}
          <div className="absolute inset-0 border border-dashed border-transparent rounded-lg pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}

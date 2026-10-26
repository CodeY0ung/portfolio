
import { getKnowledge } from "@/lib/knowledge";

export async function KnowledgeSection() {
  const categories = await getKnowledge();

  return (
    <section className="knowledge" id="knowledge">
      <div className="section-header">
        <h2>Development Notes.</h2>
        <span className="section-count">KNOWLEDGE BASE</span>
      </div>

      <p className="knowledge-description">
        학습하고 검증한 개발 지식을 주제별로 정리합니다.
      </p>

      <div className="knowledge-grid">
        {categories.map((category) => (
          <div className="knowledge-card" key={category.name}>
            <div className="knowledge-card-header">
              <h3>{category.name}</h3>
              <span>{category.docs.length} NOTES</span>
            </div>

            <ul>
              {category.docs.map((doc) => (
                <li key={doc.path}>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{doc.name}</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <a
        className="knowledge-all"
        href="https://github.com/CodeY0ung/dev_knowledge_base"
        target="_blank"
        rel="noopener noreferrer"
      >
        모든 학습 기록 보기 <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

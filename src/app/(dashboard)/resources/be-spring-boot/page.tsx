import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "TagMinder BE – Kế hoạch học 2 tuần",
    description: "Tài liệu học tập và kế hoạch 2 tuần nắm vững kiến trúc Backend Spring Boot.",
}

export default function BeSpringBootPage() {
    return (
        <>
            <style>{`
        .be-page {
          background: #0f1117;
          color: #e2e8f0;
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          min-height: 100vh;
          padding: 24px;
          --accent: #6c63ff;
          --accent2: #00d4aa;
          --accent3: #f7c948;
          --red: #ff5370;
          --muted: #8892a4;
          --card: #1a1d27;
          --card2: #22263a;
          --border: #2d3148;
        }
        .be-page h1 { font-size: 2rem; font-weight: 700; margin-bottom: 4px; }
        .be-page h2 {
          font-size: 1.3rem; font-weight: 600; color: #00d4aa;
          margin: 28px 0 12px; border-left: 4px solid #00d4aa; padding-left: 12px;
        }
        .be-page h3 { font-size: 1rem; font-weight: 600; color: #f7c948; margin: 16px 0 8px; }
        .be-page p, .be-page li { font-size: .92rem; }
        .be-hero {
          background: linear-gradient(135deg, #1a1d27, #22263a);
          border: 1px solid #2d3148; border-radius: 14px;
          padding: 28px; margin-bottom: 28px;
        }
        .be-stack-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 10px; margin: 16px 0;
        }
        .be-tag {
          background: #22263a; border: 1px solid #2d3148;
          border-radius: 8px; padding: 10px 14px; font-size: .85rem;
        }
        .be-tag span { display: block; font-size: .75rem; color: #8892a4; margin-top: 2px; }
        .be-week { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 16px 0; }
        @media (max-width: 640px) { .be-week { grid-template-columns: 1fr; } }
        .be-day {
          background: #1a1d27; border: 1px solid #2d3148;
          border-radius: 10px; padding: 16px;
        }
        .be-day h4 { font-size: .9rem; font-weight: 600; color: #6c63ff; margin-bottom: 8px; }
        .be-day ul { padding-left: 18px; }
        .be-day li { font-size: .84rem; color: #8892a4; margin-bottom: 4px; }
        .be-day li strong { color: #e2e8f0; }
        .be-skill-row { display: flex; gap: 8px; flex-wrap: wrap; margin: 8px 0; }
        .be-pill {
          background: #22263a; border: 1px solid #6c63ff;
          color: #6c63ff; border-radius: 20px; padding: 4px 12px; font-size: .8rem;
        }
        .be-pill.green { border-color: #00d4aa; color: #00d4aa; }
        .be-pill.yellow { border-color: #f7c948; color: #f7c948; }
        .be-pill.red { border-color: #ff5370; color: #ff5370; }
        .be-code {
          font-family: 'Fira Code', 'Courier New', monospace;
          background: #22263a; padding: 2px 6px; border-radius: 4px;
          font-size: .83rem; color: #bfaaff;
        }
        .be-shortcut {
          background: #1a1d27; border: 1px solid #2d3148;
          border-radius: 10px; padding: 16px; margin: 8px 0;
        }
        .be-shortcut h4 { color: #ff5370; font-size: .9rem; margin-bottom: 6px; }
        .be-shortcut.green { border-color: #00d4aa; }
        .be-shortcut.green h4 { color: #00d4aa; }
        .be-progress {
          background: #1a1d27; border: 1px solid #2d3148;
          border-radius: 10px; padding: 20px; margin: 8px 0;
        }
        .be-log {
          background: #22263a; border-radius: 8px;
          padding: 12px; margin: 8px 0; font-size: .85rem;
        }
        .be-log .date { color: #8892a4; font-size: .78rem; margin-bottom: 4px; }
        .be-badge {
          display: inline-block; padding: 2px 8px;
          border-radius: 4px; font-size: .75rem; font-weight: 600;
        }
        .be-badge.done { background: #00d4aa22; color: #00d4aa; }
        .be-badge.todo { background: #6c63ff22; color: #6c63ff; }
        .be-badge.skip { background: #ff537022; color: #ff5370; }
        .be-table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: .85rem; }
        .be-table th {
          background: #22263a; color: #00d4aa;
          padding: 8px 12px; text-align: left; border-bottom: 2px solid #2d3148;
        }
        .be-table td {
          padding: 8px 12px; border-bottom: 1px solid #2d3148; color: #8892a4;
        }
        .be-table td:first-child { color: #e2e8f0; font-weight: 500; }
        .be-flow { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; margin: 10px 0; font-size: .85rem; }
        .be-flow .arrow { color: #8892a4; }
        .be-box {
          background: #22263a; border-radius: 6px;
          padding: 6px 12px; border: 1px solid #2d3148;
        }
        .be-details {
          background: #1a1d27; border: 1px solid #2d3148;
          border-radius: 10px; margin: 8px 0;
        }
        .be-summary {
          padding: 14px 16px; cursor: pointer;
          font-weight: 600; font-size: .92rem; color: #f7c948;
          list-style: none;
        }
        .be-summary::-webkit-details-marker { display: none; }
        .be-content { padding: 0 16px 16px; }
        .be-pre {
          background: #22263a; border-radius: 8px;
          padding: 12px; font-family: 'Fira Code', monospace;
          font-size: .82rem; overflow-x: auto; color: #bfaaff;
          white-space: pre-wrap; margin: 0;
        }
        .be-note {
          background: #6c63ff15; border: 1px solid #6c63ff44;
          border-radius: 8px; padding: 12px 16px;
          font-size: .85rem; margin: 10px 0;
        }
        .be-link { color: #6c63ff; text-decoration: none; }
        .be-link:hover { text-decoration: underline; }
      `}</style>

            <div className="be-page">
                {/* HERO */}
                <div className="be-hero">
                    <h1>🚀 TagMinder BE – Kế hoạch học 2 tuần</h1>
                    <p style={{ color: "#8892a4", marginTop: 6 }}>
                        Mentor: Top 0.1% BE Engineer &nbsp;|&nbsp; Học viên: Nguyễn Trọng Hải &nbsp;|&nbsp; Bắt đầu: 03/03/2026
                    </p>
                    <div className="be-note" style={{ marginTop: 16 }}>
                        💡 <strong>Triết lý học:</strong> Đừng đọc hết code. Hãy hiểu{" "}
                        <em>luồng request → response</em> trước, sau đó mới đào sâu từng module. 80% công việc
                        thực tế chỉ cần 20% kiến thức.
                    </div>
                </div>

                {/* TECH STACK */}
                <h2>🛠 Tech Stack của dự án</h2>
                <div className="be-stack-grid">
                    {[
                        ["☕ Java 17", "LTS, record, sealed class"],
                        ["🌱 Spring Boot 3.3.4", "Auto-config, Starter"],
                        ["🔐 Spring Security + JWT", "Stateless, Filter-based"],
                        ["🗂 MyBatis 3.0.3", "SQL Mapper (không dùng JPA)"],
                        ["🐬 MariaDB", "Qua Docker, port 3306"],
                        ["🪣 Liquibase", "DB migration tự động"],
                        ["⚡ Caffeine Cache", "In-memory cache"],
                        ["📐 Lombok", "Giảm boilerplate code"],
                        ["🔄 Spring AOP", "Logging cross-cutting"],
                        ["📧 Spring Mail", "Gmail SMTP"],
                        ["📋 Apache POI", "Xuất file Excel"],
                        ["🔑 2FA / TOTP", "Google Authenticator"],
                        ["📦 Gradle", "Build tool, Jib Docker"],
                        ["🎯 Adobe Reactor API", "Tag property sync"],
                    ].map(([name, desc]) => (
                        <div key={name} className="be-tag">
                            {name}
                            <span>{desc}</span>
                        </div>
                    ))}
                </div>

                {/* LUỒNG REQUEST */}
                <h2>🔄 Luồng Request → Response (BẮT ĐẦU ĐÂY!)</h2>
                <div className="be-flow">
                    <div className="be-box">HTTP Request</div>
                    <span className="arrow">→</span>
                    <div className="be-box">
                        <code className="be-code">AuthFilter</code>
                        <br />
                        <small style={{ color: "#8892a4" }}>JWT validate</small>
                    </div>
                    <span className="arrow">→</span>
                    <div className="be-box">
                        <code className="be-code">SecurityConfig</code>
                        <br />
                        <small style={{ color: "#8892a4" }}>authorize</small>
                    </div>
                    <span className="arrow">→</span>
                    <div className="be-box">
                        <code className="be-code">Controller</code>
                        <br />
                        <small style={{ color: "#8892a4" }}>@RestController</small>
                    </div>
                    <span className="arrow">→</span>
                    <div className="be-box">
                        <code className="be-code">Service</code>
                        <br />
                        <small style={{ color: "#8892a4" }}>Business logic</small>
                    </div>
                    <span className="arrow">→</span>
                    <div className="be-box">
                        <code className="be-code">Repository</code>
                        <br />
                        <small style={{ color: "#8892a4" }}>MyBatis Mapper</small>
                    </div>
                    <span className="arrow">→</span>
                    <div className="be-box">MariaDB</div>
                </div>
                <div className="be-flow">
                    <div className="be-box">Exception</div>
                    <span className="arrow">→</span>
                    <div className="be-box">
                        <code className="be-code">TmsException</code>
                    </div>
                    <span className="arrow">→</span>
                    <div className="be-box">
                        <code className="be-code">ControllerAdvice</code>
                        <br />
                        <small style={{ color: "#8892a4" }}>@RestControllerAdvice</small>
                    </div>
                    <span className="arrow">→</span>
                    <div className="be-box">
                        <code className="be-code">TmsResponse</code>
                        <br />
                        <small style={{ color: "#8892a4" }}>Unified format</small>
                    </div>
                </div>

                {/* KIẾN TRÚC PACKAGE */}
                <h2>📁 Kiến trúc Package</h2>
                <table className="be-table">
                    <thead>
                        <tr>
                            <th>Package</th>
                            <th>Vai trò</th>
                            <th>Số file</th>
                            <th>Ưu tiên học</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ["controller/", "Tiếp nhận HTTP, validate input, gọi Service", "23", "⭐⭐⭐ Cao"],
                            ["service/", "Business logic chính", "30", "⭐⭐⭐ Cao"],
                            ["repository/", "MyBatis mapper interface, gọi SQL", "31", "⭐⭐⭐ Cao"],
                            ["domain/", "Entity/Model class (map với DB table)", "44", "⭐⭐ Trung bình"],
                            ["dto/", "Request/Response/Enum objects", "114", "⭐⭐ Trung bình"],
                            ["config/security/", "JWT filter, SecurityConfig, PasswordConfig", "4", "⭐⭐⭐ Cao"],
                            ["exception/", "TmsException, ResponseCode, ControllerAdvice", "3", "⭐⭐⭐ Cao"],
                            ["aop/", "LoggingAop – log mọi request tự động", "1", "⭐ Thấp"],
                            ["util/", "JwtUtil, helper methods", "29", "⭐⭐ Trung bình"],
                            ["annotation/", "Custom annotation", "2", "⭐ Thấp"],
                        ].map(([pkg, role, count, priority]) => (
                            <tr key={pkg}>
                                <td>{pkg}</td>
                                <td>{role}</td>
                                <td>{count}</td>
                                <td>{priority}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* LỐI TẮT */}
                <h2>⚡ Lối Tắt – Skip cái không cần thiết</h2>
                <div className="be-shortcut">
                    <h4>🚫 BỎ QUA hoàn toàn (ít nhất 2 tuần đầu)</h4>
                    <ul style={{ paddingLeft: 18 }}>
                        {[
                            <>Toàn bộ <strong>util/</strong> – chỉ đọc khi cần dùng</>,
                            <><strong>DynamicGuideMenuService.java</strong> (35KB!) – phức tạp nhất, để sau</>,
                            <><strong>AdobeDataService.java</strong> &amp; <strong>AdobeTransactionService.java</strong> – Adobe API sync phức tạp</>,
                            <>Chi tiết <strong>Liquibase SQL files</strong> – chỉ cần biết khái niệm</>,
                            <>Config <strong>Jib Docker</strong> trong build.gradle</>,
                            <><strong>2FA implementation</strong> – đọc sau khi nắm Auth flow</>,
                        ].map((item, i) => (
                            <li key={i} style={{ margin: "4px 0", fontSize: ".85rem" }}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="be-shortcut green">
                    <h4>✅ ĐỌC NGAY (Core của dự án)</h4>
                    <ul style={{ paddingLeft: 18 }}>
                        {[
                            <><code className="be-code">AuthFilter.java</code> → hiểu cách JWT được validate mỗi request</>,
                            <><code className="be-code">SecurityConfig.java</code> → biết endpoint nào cần auth</>,
                            <><code className="be-code">TmsException.java</code> + <code className="be-code">ResponseCode.java</code> + <code className="be-code">ControllerAdvice.java</code> → hiểu error handling</>,
                            <><code className="be-code">RuleController.java</code> + <code className="be-code">RuleService.java</code> → business domain chính</>,
                            <><code className="be-code">AuthController.java</code> + <code className="be-code">AuthService.java</code> → auth flow (login, refresh token)</>,
                            <>1 file XML Mapper trong mybatis/ → hiểu cách MyBatis query</>,
                        ].map((item, i) => (
                            <li key={i} style={{ margin: "4px 0", fontSize: ".85rem" }}>{item}</li>
                        ))}
                    </ul>
                </div>

                {/* KẾ HOẠCH 2 TUẦN */}
                <h2>📅 Kế hoạch 2 tuần chi tiết</h2>

                <h3>TUẦN 1 – Nền tảng &amp; Kiến trúc</h3>
                <div className="be-week">
                    <div className="be-day">
                        <h4>📌 Ngày 1-2: Setup &amp; Hiểu cấu trúc</h4>
                        <ul>
                            <li><strong>Run được project</strong> (đã chạy ./gradlew bootRun ✓)</li>
                            <li>Đọc <code className="be-code">application.yml</code> từ đầu đến cuối – biết: DB config, JWT config, mail config</li>
                            <li>Đọc <code className="be-code">build.gradle</code> – nhận ra từng dependency dùng để làm gì</li>
                            <li>Vẽ sơ đồ luồng request trên giấy (theo diagram ở trên)</li>
                            <li>Đọc <code className="be-code">TmsApplication.java</code>, <code className="be-code">AppStartRunner.java</code></li>
                        </ul>
                    </div>
                    <div className="be-day">
                        <h4>📌 Ngày 3-4: Security &amp; Authentication</h4>
                        <ul>
                            <li>Đọc <code className="be-code">SecurityConfig.java</code> – hiểu endpoint nào open/protected</li>
                            <li>Đọc <code className="be-code">AuthFilter.java</code> – hiểu JWT được check như thế nào</li>
                            <li>Đọc <code className="be-code">AuthController.java</code> – các API: login, logout, refresh</li>
                            <li>Đọc <code className="be-code">AuthService.java</code> (skip phần 2FA trước)</li>
                            <li>Đọc <code className="be-code">JwtUtil.java</code> trong util/</li>
                        </ul>
                    </div>
                    <div className="be-day">
                        <h4>📌 Ngày 5: Exception &amp; Response</h4>
                        <ul>
                            <li>Đọc <code className="be-code">TmsException.java</code></li>
                            <li>Đọc <code className="be-code">ResponseCode.java</code> – nắm hết error codes</li>
                            <li>Đọc <code className="be-code">ControllerAdvice.java</code></li>
                            <li>Hiểu <code className="be-code">TmsResponse</code> DTO format</li>
                            <li>Thực hành: dùng Postman gọi API sai → xem response format</li>
                        </ul>
                    </div>
                    <div className="be-day">
                        <h4>📌 Ngày 6-7: MyBatis &amp; Database</h4>
                        <ul>
                            <li>Đọc 1 file Mapper XML trong <code className="be-code">mybatis/</code> (ví dụ: RuleMapper.xml)</li>
                            <li>Đọc domain class <code className="be-code">User.java</code>, <code className="be-code">TagRule.java</code></li>
                            <li>Hiểu annotation <code className="be-code">@Mapper</code>, <code className="be-code">@Select</code>, <code className="be-code">@Insert</code></li>
                            <li>Đọc <code className="be-code">application.yml</code> phần mybatis config</li>
                            <li>Thực hành: tìm 1 SQL trong mapper → trace đến service → controller</li>
                        </ul>
                    </div>
                </div>

                <h3>TUẦN 2 – Business Domain &amp; Thực chiến</h3>
                <div className="be-week">
                    <div className="be-day">
                        <h4>📌 Ngày 8-9: Core Business – Rule Module</h4>
                        <ul>
                            <li>Đọc <code className="be-code">RuleController.java</code> – nắm API endpoints</li>
                            <li>Đọc <code className="be-code">RuleService.java</code> – business logic chính</li>
                            <li>Đọc domain <code className="be-code">TagRule.java</code>, <code className="be-code">AnalysisResult.java</code></li>
                            <li>Trace full request: POST /v1/rule → Service → Repository → DB</li>
                            <li>Đọc <code className="be-code">RuleCommentService.java</code> (nhỏ, dễ hiểu)</li>
                        </ul>
                    </div>
                    <div className="be-day">
                        <h4>📌 Ngày 10-11: User Management &amp; Permissions</h4>
                        <ul>
                            <li>Đọc <code className="be-code">UserManagementController.java</code></li>
                            <li>Đọc <code className="be-code">AdminUserService.java</code></li>
                            <li>Hiểu <code className="be-code">RoleType</code> enum → cách phân quyền</li>
                            <li>Đọc <code className="be-code">@PreAuthorize</code> annotations trong controllers</li>
                            <li>Đọc <code className="be-code">MailService.java</code> – invite user, reset password</li>
                        </ul>
                    </div>
                    <div className="be-day">
                        <h4>📌 Ngày 12-13: Advanced Features</h4>
                        <ul>
                            <li>Đọc <code className="be-code">DeployJobController.java</code> + <code className="be-code">DeployJobService.java</code></li>
                            <li>Đọc <code className="be-code">LibraryService.java</code> – Adobe library management</li>
                            <li>Đọc <code className="be-code">CacheConfig.java</code> – hiểu Caffeine cache setup</li>
                            <li>Đọc <code className="be-code">LoggingAop.java</code> – hiểu AOP logging pattern</li>
                            <li>Đọc <code className="be-code">ReportController.java</code> + <code className="be-code">ReportService.java</code></li>
                        </ul>
                    </div>
                    <div className="be-day">
                        <h4>📌 Ngày 14: Review &amp; Thực hành</h4>
                        <ul>
                            <li>Tự thêm 1 endpoint mới (CRUD đơn giản)</li>
                            <li>Debug bằng cách đọc log (LoggingAop)</li>
                            <li>Hiểu Liquibase: đọc <code className="be-code">changelog-master.xml</code></li>
                            <li>Review lại sơ đồ luồng – bổ sung những gì đã học</li>
                            <li>Đọc <code className="be-code">AdobeService.java</code> (nhỏ, 1KB) – điểm vào Adobe</li>
                        </ul>
                    </div>
                </div>

                {/* SKILLS */}
                <h2>🎯 Skills cần học theo thứ tự ưu tiên</h2>

                <h3><span className="be-badge done">PHẢI BIẾT</span> Trước khi đọc code</h3>
                <div className="be-skill-row">
                    {["Spring Boot cơ bản", "@RestController, @Service, @Repository", "HTTP Methods (GET/POST/PUT/DELETE)", "JSON format", "Maven/Gradle cơ bản"].map(s => (
                        <span key={s} className="be-pill">{s}</span>
                    ))}
                </div>

                <h3><span className="be-badge todo">NẮM TUẦN 1</span> Core Skills</h3>
                <div className="be-skill-row">
                    {["JWT Authentication", "Spring Security Filter Chain", "MyBatis (mapper, XML config)", "Lombok (@Data, @Builder, @AllArgsConstructor)", "@RestControllerAdvice pattern"].map(s => (
                        <span key={s} className="be-pill green">{s}</span>
                    ))}
                </div>

                <h3><span className="be-badge todo">NẮM TUẦN 2</span> Advanced Skills</h3>
                <div className="be-skill-row">
                    {["Spring AOP (@Around, @Before)", "Caffeine Cache (@Cacheable, @CacheEvict)", "Liquibase migration", "Bean Validation (@Valid, @NotNull)", "Spring Retry (@Retryable)"].map(s => (
                        <span key={s} className="be-pill yellow">{s}</span>
                    ))}
                </div>

                <h3><span className="be-badge skip">ĐỌC SAU</span> Khi đi sâu</h3>
                <div className="be-skill-row">
                    {["2FA / TOTP", "Apache POI (Excel)", "Adobe Reactor API", "Micrometer Tracing", "Jib Docker build"].map(s => (
                        <span key={s} className="be-pill red">{s}</span>
                    ))}
                </div>

                {/* PATTERNS */}
                <h2>🧩 Patterns quan trọng trong project</h2>

                <details className="be-details">
                    <summary className="be-summary">Pattern 1: Standard Controller Structure</summary>
                    <div className="be-content">
                        <p style={{ margin: "8px 0", color: "#8892a4" }}>Mọi controller đều theo dạng:</p>
                        <pre className="be-pre">{`@RestController
@RequestMapping("/v1/rule")
@AllArgsConstructor
public class RuleController {
    private final RuleService ruleService;

    @GetMapping
    public ResponseEntity<TmsResponse> getRules(...) {
        return ResponseEntity.ok(new TmsResponse<>(ruleService.getRules(...)));
    }
}`}</pre>
                    </div>
                </details>

                <details className="be-details">
                    <summary className="be-summary">Pattern 2: Exception Handling – TmsException</summary>
                    <div className="be-content">
                        <pre className="be-pre">{`// Trong Service, throw exception với ResponseCode
if (user == null) {
    throw new TmsException(ResponseCode.NOT_FOUND);
}
// → ControllerAdvice bắt, trả về JSON chuẩn tự động`}</pre>
                    </div>
                </details>

                <details className="be-details">
                    <summary className="be-summary">Pattern 3: MyBatis Mapper</summary>
                    <div className="be-content">
                        <pre className="be-pre">{`// Repository interface
@Mapper
public interface RuleRepository {
    List<TagRule> findByPropertyId(@Param("propertyId") Long id);
}

// mybatis/RuleMapper.xml
<select id="findByPropertyId" resultType="TagRule">
    SELECT * FROM tb_tag_rule WHERE property_id = #{propertyId}
</select>`}</pre>
                    </div>
                </details>

                <details className="be-details">
                    <summary className="be-summary">Pattern 4: JWT Flow</summary>
                    <div className="be-content">
                        <p style={{ fontSize: ".85rem", color: "#8892a4", margin: "8px 0" }}>
                            Login → Server tạo accessToken + refreshToken → Client gửi kèm{" "}
                            <code className="be-code">Authorization: Bearer &lt;token&gt;</code> mỗi request →{" "}
                            <code className="be-code">AuthFilter</code> validate → set SecurityContext → Controller xử lý.
                        </p>
                        <p style={{ fontSize: ".85rem", color: "#8892a4" }}>
                            Token hết hạn (1h) → dùng refreshToken (24h) gọi refresh endpoint → nhận accessToken mới.
                        </p>
                    </div>
                </details>

                {/* TÀI NGUYÊN */}
                <h2>📚 Tài nguyên học đề xuất</h2>
                <table className="be-table">
                    <thead>
                        <tr>
                            <th>Chủ đề</th>
                            <th>Tài nguyên</th>
                            <th>Thời gian</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ["Spring Boot cơ bản", <a key="1" className="be-link" href="https://spring.io/guides/gs/spring-boot/" target="_blank" rel="noreferrer">spring.io/guides</a>, "2h"],
                            ["JWT + Spring Security", <a key="2" className="be-link" href="https://www.youtube.com/results?search_query=spring+security+jwt+2024" target="_blank" rel="noreferrer">YouTube: Amigoscode JWT</a>, "3h"],
                            ["MyBatis", <a key="3" className="be-link" href="https://mybatis.org/mybatis-3/getting-started.html" target="_blank" rel="noreferrer">mybatis.org/getting-started</a>, "2h"],
                            ["Lombok", <a key="4" className="be-link" href="https://projectlombok.org/features/" target="_blank" rel="noreferrer">projectlombok.org/features</a>, "1h"],
                            ["Spring AOP", <a key="5" className="be-link" href="https://docs.spring.io/spring-framework/reference/core/aop.html" target="_blank" rel="noreferrer">Spring AOP Docs</a>, "1.5h"],
                            ["Liquibase", <a key="6" className="be-link" href="https://docs.liquibase.com/concepts/home.html" target="_blank" rel="noreferrer">docs.liquibase.com</a>, "1h"],
                        ].map(([subject, resource, time], i) => (
                            <tr key={i}>
                                <td>{subject}</td>
                                <td>{resource}</td>
                                <td>{time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* PROGRESS LOG */}
                <h2>📝 Nhật ký học tập (cập nhật mỗi buổi)</h2>
                <div className="be-progress">
                    <p style={{ fontSize: ".85rem", color: "#8892a4", marginBottom: 12 }}>
                        📅 Ghi lại tiến độ, câu hỏi, và những gì đã hiểu mỗi ngày. Chia sẻ file này với AI để được hỗ trợ tiếp theo.
                    </p>
                    <div className="be-log">
                        <div className="date">📅 Ngày 1 – 03/03/2026</div>
                        <span className="be-badge done">MẪU</span>
                        <p style={{ marginTop: 6 }}>✅ Đã chạy được project (./gradlew bootRun)</p>
                        <p>✅ Đọc xong application.yml – hiểu DB/JWT/mail config</p>
                        <p>❓ Câu hỏi: <em>Tại sao dùng MyBatis thay vì JPA/Hibernate?</em></p>
                    </div>
                    <div className="be-log">
                        <div className="date">📅 Ngày 2 – __/__/2026</div>
                        <p style={{ color: "#8892a4", fontStyle: "italic", fontSize: ".83rem" }}>← Ghi lại đây những gì bạn đã học hôm nay</p>
                    </div>
                    <div className="be-log">
                        <div className="date">📅 Ngày 3 – __/__/2026</div>
                        <p style={{ color: "#8892a4", fontStyle: "italic", fontSize: ".83rem" }}>← Ghi lại đây những gì bạn đã học hôm nay</p>
                    </div>
                    <div className="be-log">
                        <div className="date">📅 Ngày 4-14 – __/__/2026</div>
                        <p style={{ color: "#8892a4", fontStyle: "italic", fontSize: ".83rem" }}>← Tiếp tục ghi nhật ký...</p>
                    </div>
                </div>

                {/* TEMPLATE AI */}
                <h2>🤖 Template chia sẻ với AI trong lần chat tiếp theo</h2>
                <div className="be-note">
                    <p style={{ fontWeight: 600, marginBottom: 8 }}>Copy đoạn này khi bắt đầu chat mới:</p>
                    <pre className="be-pre">{`Tôi đang học dự án TagMinder BE API (Spring Boot 3.3, Java 17, MyBatis, MariaDB, JWT).
File kế hoạch học: tagminder-learning-plan.html trên Desktop của tôi.

Tiến độ hiện tại:
- Đã học đến: [điền vào đây - VD: Ngày 5, xong Security layer]
- Đã hiểu: [điền những gì đã nắm]
- Câu hỏi hôm nay: [điền câu hỏi cụ thể]
- File đang xem: [điền tên file Java đang đọc]

Giúp tôi [điền yêu cầu cụ thể].`}</pre>
                </div>

                {/* CHECKPOINT */}
                <h2>✅ Checkpoint tự kiểm tra</h2>
                <table className="be-table">
                    <thead>
                        <tr>
                            <th>Tuần 1 – Bạn có thể trả lời được không?</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            "JWT được validate ở đâu và như thế nào?",
                            "Khi throw TmsException, response trả về dạng gì?",
                            "MyBatis khác JPA/Hibernate ở điểm gì?",
                            "Endpoint nào cần token, endpoint nào public?",
                            "Lombok @Builder dùng để làm gì?",
                        ].map(q => (
                            <tr key={q}>
                                <td>{q}</td>
                                <td><span className="be-badge todo">Chưa</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <table className="be-table">
                    <thead>
                        <tr>
                            <th>Tuần 2 – Bạn có thể làm được không?</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            "Trace một API từ Controller → Service → SQL → DB",
                            "Tự thêm một endpoint CRUD mới",
                            "Debug lỗi 401/403 và biết cách fix",
                            "Viết một Liquibase changeset mới",
                            "Giải thích AOP Logging làm việc như thế nào",
                        ].map(q => (
                            <tr key={q}>
                                <td>{q}</td>
                                <td><span className="be-badge todo">Chưa</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div style={{ textAlign: "center", padding: "32px 0", color: "#8892a4", fontSize: ".85rem" }}>
                    <p>🎯 Mục tiêu: Sau 2 tuần, bạn có thể đọc hiểu và đóng góp vào bất kỳ module nào trong dự án</p>
                    <p style={{ marginTop: 8 }}>Made with ❤️ by Antigravity AI – Cập nhật lần cuối: 03/03/2026</p>
                </div>
            </div>
        </>
    )
}

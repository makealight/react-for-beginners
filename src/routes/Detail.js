import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // 🌟 뒤로가기 버튼을 위해 Link 추가!

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    // (성공하신 API 주소 그대로 유지)
    const response = await fetch(`${API_URL}/${id}`);
    const json = await response.json();
    setMovie(json);
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getMovie();
  }, [id]);

  return (
    <div
      style={{
        padding: "50px",
        color: "white",
        minHeight: "100vh",
        // 🌟 진짜 넷플릭스 마법: backdrop 이미지를 배경에 깔고, 그 위에 검은색 반투명 필터를 덮습니다!
        backgroundImage: movie.backdrop_path
          ? `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${`https://wsrv.nl/?url=${movie.backdrop_path}`})`
          : "#1e272e",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {loading ? (
        <h1 style={{ textAlign: "center", marginTop: "20vh", color: "black" }}>
          Loading movie info with... 🍿
        </h1>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "50px",
            maxWidth: "1000px",
            margin: "0 auto",
            alignItems: "center",
          }}
        >
          {/* 👈 왼쪽: 포스터 영역 (이제 데이터에 있는 진짜 주소를 바로 씁니다!) */}
          <div>
            <img
              src={`https://wsrv.nl/?url=${movie.poster_path}`}
              alt={movie.title}
              style={{
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.9)",
                maxWidth: "350px",
              }}
            />
          </div>

          {/* 👉 오른쪽: 상세 정보 텍스트 영역 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ fontSize: "3.5rem", margin: "0 0 5px 0" }}>
              {movie.title}
            </h1>

            {/* 🌟 태그라인(명대사/홍보문구)이 있다면 기울임꼴로 멋지게 표시! */}
            {movie.tagline && (
              <h3
                style={{
                  fontStyle: "italic",
                  color: "#bdc3c7",
                  marginTop: "0",
                  fontWeight: "300",
                }}
              >
                "{movie.tagline}"
              </h3>
            )}

            <h3 style={{ color: "#feca57", marginTop: "15px" }}>
              ⭐ 평점:{" "}
              {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"} / 10
              &nbsp; | &nbsp; ⏱ 시간: {movie.runtime}분 &nbsp; | &nbsp; 📅
              개봉일: {movie.release_date}
            </h3>

            {/* 장르 처리: [{id: 28, name: "Action"}] 구조에서 name만 쏙 빼서 출력! */}
            <ul
              style={{
                display: "flex",
                gap: "10px",
                padding: "0",
                listStyle: "none",
                flexWrap: "wrap",
              }}
            >
              {movie.genres &&
                movie.genres.map((g, index) => (
                  <li
                    key={index}
                    style={{
                      backgroundColor: "#e74c3c",
                      padding: "5px 15px",
                      borderRadius: "20px",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                    }}
                  >
                    {g.name || g}{" "}
                    {/* 만약 진짜 숫자만 있다면 숫자를 띄우고, 객체라면 이름을 띄웁니다! */}
                  </li>
                ))}
            </ul>

            <p
              style={{
                lineHeight: "1.8",
                fontSize: "1.1rem",
                opacity: "0.9",
                marginTop: "20px",
              }}
            >
              {movie.overview}
            </p>

            {/* 🌟 덤! 홈으로 돌아가는 예쁜 버튼 */}
            <Link
              to="/"
              style={{ textDecoration: "none", width: "fit-content" }}
            >
              <button
                style={{
                  marginTop: "30px",
                  padding: "10px 20px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  backgroundColor: "transparent",
                  color: "white",
                  border: "2px solid white",
                  borderRadius: "5px",
                  cursor: "pointer",
                  transition: "0.2s",
                }}
              >
                ⬅ 뒤로 가기
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;

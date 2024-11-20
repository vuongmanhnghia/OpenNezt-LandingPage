import React from "react";
import "./Team.scss";
import Viet_Anh from "../assets/Viet_Anh.png";
import Gia_Bach from "../assets/Gia_Bach.png";
import Phuong_Trang from "../assets/Phuong_Trang.png";
import Hoang from "../assets/Hoang.jpg";
import Nghia from "../assets/Nghia.jpg";
import Thi_Thuy from "../assets/Thi_Thuy.png";
import Van_Lich from "../assets/Van_Lich.png";
import Van_Thuong from "../assets/Van_Thuong.jpg";
import Huong_Lan from "../assets/Huong_Lan.jpg";
import Soren_Kirchner from "../assets/Soren_Kirchner.png";
import Duc_Vinh from "../assets/Duc_Vinh.png";

function Team() {
	return (
		<>
			<div className="team-container">
				<div className="team-content container">
					<div className="team-header">
						<div className="team-header-text">
							Meet the Team
						</div>
						{/* <div className="line-color">
							<div className="purple line"></div>
							<div className="blue line"></div>
							<div className="green line"></div>
							<div className="yellow line"></div>
							<div className="red line"></div>
						</div> */}
					</div>
					{/* <div className="team-text">
						At OpenNezt, we value{" "}
						<span style={{ color: `#3891AF`, fontWeight: "700" }}>
							diversity
						</span>
						,{" "}
						<span style={{ color: `#CE3F4D`, fontWeight: "700" }}>
							innovation
						</span>
						, and{" "}
						<span style={{ color: `#C39B37`, fontWeight: "700" }}>
							collaboration
						</span>
						.
						<br />
						Meet our global team of experts committed to{" "}
						<span style={{ color: `#7DA553`, fontWeight: "700" }}>
							revolutionizing{" "}
						</span>
						the startup ecosystem.
					</div> */}
					<div className="line1">
						<div className="line">
							</div>
						<div className="rectangle">
							<span className="rectangle-text">CORE TEAM</span>
							<div className="rectangle2">MENTOR TEAM</div>
						</div>
					</div>
					<div className="core-team">
						<div className="box-member">
							<div
								className="avt"
								style={{
									background: `url(${Viet_Anh})`,
									// border: `rgba(79, 193, 232, 1) 4px solid`,
								}}></div>
							<div className="name">Chu Việt Anh</div>
							<div className="info">Founder - Head of Production</div>
							<svg
								className="linked"
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 35 35"
								fill="none">
								<path
									d="M31.0108 0.00927734C32.0388 0.00927734 33.0248 0.417677 33.7517 1.14463C34.4787 1.87159 34.8871 2.85755 34.8871 3.88562V31.02C34.8871 32.0481 34.4787 33.0341 33.7517 33.761C33.0248 34.488 32.0388 34.8964 31.0108 34.8964H3.87634C2.84827 34.8964 1.86231 34.488 1.13535 33.761C0.408399 33.0341 0 32.0481 0 31.02V3.88562C0 2.85755 0.408399 1.87159 1.13535 1.14463C1.86231 0.417677 2.84827 0.00927734 3.87634 0.00927734H31.0108ZM30.0417 30.0509V19.7786C30.0417 18.1029 29.376 16.4958 28.191 15.3108C27.0061 14.1259 25.399 13.4602 23.7232 13.4602C22.0758 13.4602 20.157 14.468 19.2267 15.9798V13.8284H13.8192V30.0509H19.2267V20.4958C19.2267 19.0034 20.4283 17.7823 21.9207 17.7823C22.6404 17.7823 23.3305 18.0682 23.8394 18.5771C24.3483 19.0859 24.6342 19.7761 24.6342 20.4958V30.0509H30.0417ZM7.52011 10.7855C8.38369 10.7855 9.2119 10.4425 9.82254 9.83182C10.4332 9.22117 10.7762 8.39296 10.7762 7.52939C10.7762 5.72688 9.32261 4.25387 7.52011 4.25387C6.65139 4.25387 5.81825 4.59897 5.20397 5.21325C4.58969 5.82753 4.2446 6.66067 4.2446 7.52939C4.2446 9.33188 5.71761 10.7855 7.52011 10.7855ZM10.2142 30.0509V13.8284H4.84543V30.0509H10.2142Z"
									fill="white"
								/>
							</svg>
						</div>
						<div className="box-member">
							<div
								className="avt"
								style={{
									background: `url(${Gia_Bach})`,
									// backgroundPosition: `calc(50% - 0.5px) calc(0px)`,
									// border: `rgba(160, 213, 104, 1) 4px solid`,
								}}></div>
							<div className="name">Nguyễn Hoàng Gia Bách</div>
							<div className="info">Head of Finance</div>
							<svg
								className="linked"
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 35 35"
								fill="none">
								<path
									d="M31.0108 0.00927734C32.0388 0.00927734 33.0248 0.417677 33.7517 1.14463C34.4787 1.87159 34.8871 2.85755 34.8871 3.88562V31.02C34.8871 32.0481 34.4787 33.0341 33.7517 33.761C33.0248 34.488 32.0388 34.8964 31.0108 34.8964H3.87634C2.84827 34.8964 1.86231 34.488 1.13535 33.761C0.408399 33.0341 0 32.0481 0 31.02V3.88562C0 2.85755 0.408399 1.87159 1.13535 1.14463C1.86231 0.417677 2.84827 0.00927734 3.87634 0.00927734H31.0108ZM30.0417 30.0509V19.7786C30.0417 18.1029 29.376 16.4958 28.191 15.3108C27.0061 14.1259 25.399 13.4602 23.7232 13.4602C22.0758 13.4602 20.157 14.468 19.2267 15.9798V13.8284H13.8192V30.0509H19.2267V20.4958C19.2267 19.0034 20.4283 17.7823 21.9207 17.7823C22.6404 17.7823 23.3305 18.0682 23.8394 18.5771C24.3483 19.0859 24.6342 19.7761 24.6342 20.4958V30.0509H30.0417ZM7.52011 10.7855C8.38369 10.7855 9.2119 10.4425 9.82254 9.83182C10.4332 9.22117 10.7762 8.39296 10.7762 7.52939C10.7762 5.72688 9.32261 4.25387 7.52011 4.25387C6.65139 4.25387 5.81825 4.59897 5.20397 5.21325C4.58969 5.82753 4.2446 6.66067 4.2446 7.52939C4.2446 9.33188 5.71761 10.7855 7.52011 10.7855ZM10.2142 30.0509V13.8284H4.84543V30.0509H10.2142Z"
									fill="white"
								/>
							</svg>
						</div>
						<div className="box-member">
							<div
								className="avt"
								style={{
									background: `url(${Phuong_Trang})`,
									backgroundPosition: `calc(50% - 0.5px) calc(0px)`,
									// border: `rgba(172, 146, 235, 1) 4px solid`,
								}}></div>
							<div className="name">Nguyễn Phương Trang</div>
							<div className="info">Head of Marketing</div>
							<svg
								className="linked"
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 35 35"
								fill="none">
								<path
									d="M31.0108 0.00927734C32.0388 0.00927734 33.0248 0.417677 33.7517 1.14463C34.4787 1.87159 34.8871 2.85755 34.8871 3.88562V31.02C34.8871 32.0481 34.4787 33.0341 33.7517 33.761C33.0248 34.488 32.0388 34.8964 31.0108 34.8964H3.87634C2.84827 34.8964 1.86231 34.488 1.13535 33.761C0.408399 33.0341 0 32.0481 0 31.02V3.88562C0 2.85755 0.408399 1.87159 1.13535 1.14463C1.86231 0.417677 2.84827 0.00927734 3.87634 0.00927734H31.0108ZM30.0417 30.0509V19.7786C30.0417 18.1029 29.376 16.4958 28.191 15.3108C27.0061 14.1259 25.399 13.4602 23.7232 13.4602C22.0758 13.4602 20.157 14.468 19.2267 15.9798V13.8284H13.8192V30.0509H19.2267V20.4958C19.2267 19.0034 20.4283 17.7823 21.9207 17.7823C22.6404 17.7823 23.3305 18.0682 23.8394 18.5771C24.3483 19.0859 24.6342 19.7761 24.6342 20.4958V30.0509H30.0417ZM7.52011 10.7855C8.38369 10.7855 9.2119 10.4425 9.82254 9.83182C10.4332 9.22117 10.7762 8.39296 10.7762 7.52939C10.7762 5.72688 9.32261 4.25387 7.52011 4.25387C6.65139 4.25387 5.81825 4.59897 5.20397 5.21325C4.58969 5.82753 4.2446 6.66067 4.2446 7.52939C4.2446 9.33188 5.71761 10.7855 7.52011 10.7855ZM10.2142 30.0509V13.8284H4.84543V30.0509H10.2142Z"
									fill="white"
								/>
							</svg>
						</div>
						<div className="box-member">
							<div
								className="avt"
								style={{
									background: `url(${Hoang})`,
									backgroundPosition: `calc(50% - 0.5px) calc(0px)`,
									// border: `rgba(255, 206, 84, 1) 4px solid`,
								}}></div>
							<div className="name">Nguyễn Huy Hoàng</div>
							<div className="info">Backend Developer</div>
							<svg
								className="linked"
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 35 35"
								fill="none">
								<path
									d="M31.0108 0.00927734C32.0388 0.00927734 33.0248 0.417677 33.7517 1.14463C34.4787 1.87159 34.8871 2.85755 34.8871 3.88562V31.02C34.8871 32.0481 34.4787 33.0341 33.7517 33.761C33.0248 34.488 32.0388 34.8964 31.0108 34.8964H3.87634C2.84827 34.8964 1.86231 34.488 1.13535 33.761C0.408399 33.0341 0 32.0481 0 31.02V3.88562C0 2.85755 0.408399 1.87159 1.13535 1.14463C1.86231 0.417677 2.84827 0.00927734 3.87634 0.00927734H31.0108ZM30.0417 30.0509V19.7786C30.0417 18.1029 29.376 16.4958 28.191 15.3108C27.0061 14.1259 25.399 13.4602 23.7232 13.4602C22.0758 13.4602 20.157 14.468 19.2267 15.9798V13.8284H13.8192V30.0509H19.2267V20.4958C19.2267 19.0034 20.4283 17.7823 21.9207 17.7823C22.6404 17.7823 23.3305 18.0682 23.8394 18.5771C24.3483 19.0859 24.6342 19.7761 24.6342 20.4958V30.0509H30.0417ZM7.52011 10.7855C8.38369 10.7855 9.2119 10.4425 9.82254 9.83182C10.4332 9.22117 10.7762 8.39296 10.7762 7.52939C10.7762 5.72688 9.32261 4.25387 7.52011 4.25387C6.65139 4.25387 5.81825 4.59897 5.20397 5.21325C4.58969 5.82753 4.2446 6.66067 4.2446 7.52939C4.2446 9.33188 5.71761 10.7855 7.52011 10.7855ZM10.2142 30.0509V13.8284H4.84543V30.0509H10.2142Z"
									fill="white"
								/>
							</svg>
						</div>
						<div className="box-member">
							<div
								className="avt"
								style={{
									background: `url(${Nghia})`,
									backgroundPosition: `calc(50% - 0.5px) calc(-50px)`,
									// border: `rgba(237, 85, 100, 1) 4px solid`,
								}}></div>
							<div className="name">Vương Mạnh Nghĩa</div>
							<div className="info">DevOps</div>
							<svg
								className="linked"
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 35 35"
								fill="none">
								<path
									d="M31.0108 0.00927734C32.0388 0.00927734 33.0248 0.417677 33.7517 1.14463C34.4787 1.87159 34.8871 2.85755 34.8871 3.88562V31.02C34.8871 32.0481 34.4787 33.0341 33.7517 33.761C33.0248 34.488 32.0388 34.8964 31.0108 34.8964H3.87634C2.84827 34.8964 1.86231 34.488 1.13535 33.761C0.408399 33.0341 0 32.0481 0 31.02V3.88562C0 2.85755 0.408399 1.87159 1.13535 1.14463C1.86231 0.417677 2.84827 0.00927734 3.87634 0.00927734H31.0108ZM30.0417 30.0509V19.7786C30.0417 18.1029 29.376 16.4958 28.191 15.3108C27.0061 14.1259 25.399 13.4602 23.7232 13.4602C22.0758 13.4602 20.157 14.468 19.2267 15.9798V13.8284H13.8192V30.0509H19.2267V20.4958C19.2267 19.0034 20.4283 17.7823 21.9207 17.7823C22.6404 17.7823 23.3305 18.0682 23.8394 18.5771C24.3483 19.0859 24.6342 19.7761 24.6342 20.4958V30.0509H30.0417ZM7.52011 10.7855C8.38369 10.7855 9.2119 10.4425 9.82254 9.83182C10.4332 9.22117 10.7762 8.39296 10.7762 7.52939C10.7762 5.72688 9.32261 4.25387 7.52011 4.25387C6.65139 4.25387 5.81825 4.59897 5.20397 5.21325C4.58969 5.82753 4.2446 6.66067 4.2446 7.52939C4.2446 9.33188 5.71761 10.7855 7.52011 10.7855ZM10.2142 30.0509V13.8284H4.84543V30.0509H10.2142Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>
					<div className="line2">
						<div className="line"></div>
						<div className="rectangle">
							<div className="rectangle2">CORE TEAM</div>
							<span className="rectangle-text">MENTOR TEAM</span>
						</div>
					</div>
					<div className="mentor-team">
						<div className="box-member">
							<div
								className="avt"
								style={{
									background: `url(${Huong_Lan})`,
									backgroundPosition: `calc(50% - 0.5px) calc(-50px)`,
								}}></div>
							<div className="name">Assoc. Prof. Đỗ Hương Lan</div>
							<div className="info">Deputy Director of CSIE - NEU</div>
							<svg
								className="linked"
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 35 35"
								fill="none">
								<path
									d="M31.0108 0.00927734C32.0388 0.00927734 33.0248 0.417677 33.7517 1.14463C34.4787 1.87159 34.8871 2.85755 34.8871 3.88562V31.02C34.8871 32.0481 34.4787 33.0341 33.7517 33.761C33.0248 34.488 32.0388 34.8964 31.0108 34.8964H3.87634C2.84827 34.8964 1.86231 34.488 1.13535 33.761C0.408399 33.0341 0 32.0481 0 31.02V3.88562C0 2.85755 0.408399 1.87159 1.13535 1.14463C1.86231 0.417677 2.84827 0.00927734 3.87634 0.00927734H31.0108ZM30.0417 30.0509V19.7786C30.0417 18.1029 29.376 16.4958 28.191 15.3108C27.0061 14.1259 25.399 13.4602 23.7232 13.4602C22.0758 13.4602 20.157 14.468 19.2267 15.9798V13.8284H13.8192V30.0509H19.2267V20.4958C19.2267 19.0034 20.4283 17.7823 21.9207 17.7823C22.6404 17.7823 23.3305 18.0682 23.8394 18.5771C24.3483 19.0859 24.6342 19.7761 24.6342 20.4958V30.0509H30.0417ZM7.52011 10.7855C8.38369 10.7855 9.2119 10.4425 9.82254 9.83182C10.4332 9.22117 10.7762 8.39296 10.7762 7.52939C10.7762 5.72688 9.32261 4.25387 7.52011 4.25387C6.65139 4.25387 5.81825 4.59897 5.20397 5.21325C4.58969 5.82753 4.2446 6.66067 4.2446 7.52939C4.2446 9.33188 5.71761 10.7855 7.52011 10.7855ZM10.2142 30.0509V13.8284H4.84543V30.0509H10.2142Z"
									fill="white"
								/>
							</svg>
						</div>
						<div className="box-member">
							<div
								className="avt"
								style={{
									background: `url(${Soren_Kirchner})`,
									backgroundPosition: `calc(50% - 0.5px) calc(0px)`,
								}}></div>
							<div className="name">Prof. Soren Kirchner</div>
							<div className="info">
								MBA Training Expert - Andrews University
							</div>
							<svg
								className="linked"
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 35 35"
								fill="none">
								<path
									d="M31.0108 0.00927734C32.0388 0.00927734 33.0248 0.417677 33.7517 1.14463C34.4787 1.87159 34.8871 2.85755 34.8871 3.88562V31.02C34.8871 32.0481 34.4787 33.0341 33.7517 33.761C33.0248 34.488 32.0388 34.8964 31.0108 34.8964H3.87634C2.84827 34.8964 1.86231 34.488 1.13535 33.761C0.408399 33.0341 0 32.0481 0 31.02V3.88562C0 2.85755 0.408399 1.87159 1.13535 1.14463C1.86231 0.417677 2.84827 0.00927734 3.87634 0.00927734H31.0108ZM30.0417 30.0509V19.7786C30.0417 18.1029 29.376 16.4958 28.191 15.3108C27.0061 14.1259 25.399 13.4602 23.7232 13.4602C22.0758 13.4602 20.157 14.468 19.2267 15.9798V13.8284H13.8192V30.0509H19.2267V20.4958C19.2267 19.0034 20.4283 17.7823 21.9207 17.7823C22.6404 17.7823 23.3305 18.0682 23.8394 18.5771C24.3483 19.0859 24.6342 19.7761 24.6342 20.4958V30.0509H30.0417ZM7.52011 10.7855C8.38369 10.7855 9.2119 10.4425 9.82254 9.83182C10.4332 9.22117 10.7762 8.39296 10.7762 7.52939C10.7762 5.72688 9.32261 4.25387 7.52011 4.25387C6.65139 4.25387 5.81825 4.59897 5.20397 5.21325C4.58969 5.82753 4.2446 6.66067 4.2446 7.52939C4.2446 9.33188 5.71761 10.7855 7.52011 10.7855ZM10.2142 30.0509V13.8284H4.84543V30.0509H10.2142Z"
									fill="white"
								/>
							</svg>
						</div>
						<div className="box-member">
							<div
								className="avt"
								style={{
									background: `url(${Van_Thuong})`,
									backgroundPosition: `calc(50% - 0.5px) calc(0px)`,
								}}></div>
							<div className="name">MSc. Vũ Văn Thương</div>
							<div className="info">
								Founder of ZentSoft Software Solutions
							</div>
							<svg
								className="linked"
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 35 35"
								fill="none">
								<path
									d="M31.0108 0.00927734C32.0388 0.00927734 33.0248 0.417677 33.7517 1.14463C34.4787 1.87159 34.8871 2.85755 34.8871 3.88562V31.02C34.8871 32.0481 34.4787 33.0341 33.7517 33.761C33.0248 34.488 32.0388 34.8964 31.0108 34.8964H3.87634C2.84827 34.8964 1.86231 34.488 1.13535 33.761C0.408399 33.0341 0 32.0481 0 31.02V3.88562C0 2.85755 0.408399 1.87159 1.13535 1.14463C1.86231 0.417677 2.84827 0.00927734 3.87634 0.00927734H31.0108ZM30.0417 30.0509V19.7786C30.0417 18.1029 29.376 16.4958 28.191 15.3108C27.0061 14.1259 25.399 13.4602 23.7232 13.4602C22.0758 13.4602 20.157 14.468 19.2267 15.9798V13.8284H13.8192V30.0509H19.2267V20.4958C19.2267 19.0034 20.4283 17.7823 21.9207 17.7823C22.6404 17.7823 23.3305 18.0682 23.8394 18.5771C24.3483 19.0859 24.6342 19.7761 24.6342 20.4958V30.0509H30.0417ZM7.52011 10.7855C8.38369 10.7855 9.2119 10.4425 9.82254 9.83182C10.4332 9.22117 10.7762 8.39296 10.7762 7.52939C10.7762 5.72688 9.32261 4.25387 7.52011 4.25387C6.65139 4.25387 5.81825 4.59897 5.20397 5.21325C4.58969 5.82753 4.2446 6.66067 4.2446 7.52939C4.2446 9.33188 5.71761 10.7855 7.52011 10.7855ZM10.2142 30.0509V13.8284H4.84543V30.0509H10.2142Z"
									fill="white"
								/>
							</svg>
						</div>
						<div className="box-member">
							<div
								className="avt"
								style={{
									background: `url(${Duc_Vinh})`,
									backgroundPosition: `calc(50% - 0.5px) calc(0px)`,
								}}></div>
							<div className="name">MA. Nguyễn Đức Vinh</div>
							<div className="info">Director of STG</div>
							<svg
								className="linked"
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 35 35"
								fill="none">
								<path
									d="M31.0108 0.00927734C32.0388 0.00927734 33.0248 0.417677 33.7517 1.14463C34.4787 1.87159 34.8871 2.85755 34.8871 3.88562V31.02C34.8871 32.0481 34.4787 33.0341 33.7517 33.761C33.0248 34.488 32.0388 34.8964 31.0108 34.8964H3.87634C2.84827 34.8964 1.86231 34.488 1.13535 33.761C0.408399 33.0341 0 32.0481 0 31.02V3.88562C0 2.85755 0.408399 1.87159 1.13535 1.14463C1.86231 0.417677 2.84827 0.00927734 3.87634 0.00927734H31.0108ZM30.0417 30.0509V19.7786C30.0417 18.1029 29.376 16.4958 28.191 15.3108C27.0061 14.1259 25.399 13.4602 23.7232 13.4602C22.0758 13.4602 20.157 14.468 19.2267 15.9798V13.8284H13.8192V30.0509H19.2267V20.4958C19.2267 19.0034 20.4283 17.7823 21.9207 17.7823C22.6404 17.7823 23.3305 18.0682 23.8394 18.5771C24.3483 19.0859 24.6342 19.7761 24.6342 20.4958V30.0509H30.0417ZM7.52011 10.7855C8.38369 10.7855 9.2119 10.4425 9.82254 9.83182C10.4332 9.22117 10.7762 8.39296 10.7762 7.52939C10.7762 5.72688 9.32261 4.25387 7.52011 4.25387C6.65139 4.25387 5.81825 4.59897 5.20397 5.21325C4.58969 5.82753 4.2446 6.66067 4.2446 7.52939C4.2446 9.33188 5.71761 10.7855 7.52011 10.7855ZM10.2142 30.0509V13.8284H4.84543V30.0509H10.2142Z"
									fill="white"
								/>
							</svg>
						</div>
						<div className="box-member">
							<div
								className="avt"
								style={{
									background: `url(${Van_Lich})`,
									backgroundPosition: `calc(50% - 0.5px) calc(-50px)`,
								}}></div>
							<div className="name">MA. Trần Văn Lịch</div>
							<div className="info">Director of GGT Vietnam</div>
							<svg
								className="linked"
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 35 35"
								fill="none">
								<path
									d="M31.0108 0.00927734C32.0388 0.00927734 33.0248 0.417677 33.7517 1.14463C34.4787 1.87159 34.8871 2.85755 34.8871 3.88562V31.02C34.8871 32.0481 34.4787 33.0341 33.7517 33.761C33.0248 34.488 32.0388 34.8964 31.0108 34.8964H3.87634C2.84827 34.8964 1.86231 34.488 1.13535 33.761C0.408399 33.0341 0 32.0481 0 31.02V3.88562C0 2.85755 0.408399 1.87159 1.13535 1.14463C1.86231 0.417677 2.84827 0.00927734 3.87634 0.00927734H31.0108ZM30.0417 30.0509V19.7786C30.0417 18.1029 29.376 16.4958 28.191 15.3108C27.0061 14.1259 25.399 13.4602 23.7232 13.4602C22.0758 13.4602 20.157 14.468 19.2267 15.9798V13.8284H13.8192V30.0509H19.2267V20.4958C19.2267 19.0034 20.4283 17.7823 21.9207 17.7823C22.6404 17.7823 23.3305 18.0682 23.8394 18.5771C24.3483 19.0859 24.6342 19.7761 24.6342 20.4958V30.0509H30.0417ZM7.52011 10.7855C8.38369 10.7855 9.2119 10.4425 9.82254 9.83182C10.4332 9.22117 10.7762 8.39296 10.7762 7.52939C10.7762 5.72688 9.32261 4.25387 7.52011 4.25387C6.65139 4.25387 5.81825 4.59897 5.20397 5.21325C4.58969 5.82753 4.2446 6.66067 4.2446 7.52939C4.2446 9.33188 5.71761 10.7855 7.52011 10.7855ZM10.2142 30.0509V13.8284H4.84543V30.0509H10.2142Z"
									fill="white"
								/>
							</svg>
						</div>
						<div className="box-member">
							<div
								className="avt"
								style={{
									background: `url(${Thi_Thuy})`,
									backgroundPosition: `calc(50% - 0.5px) calc(0px)`,
								}}></div>
							<div className="name">MA. Đỗ Thị Thủy</div>
							<div className="info">
								Marketing and Business Development Expert
							</div>
							<svg
								className="linked"
								xmlns="http://www.w3.org/2000/svg"
								width="30"
								height="30"
								viewBox="0 0 35 35"
								fill="none">
								<path
									d="M31.0108 0.00927734C32.0388 0.00927734 33.0248 0.417677 33.7517 1.14463C34.4787 1.87159 34.8871 2.85755 34.8871 3.88562V31.02C34.8871 32.0481 34.4787 33.0341 33.7517 33.761C33.0248 34.488 32.0388 34.8964 31.0108 34.8964H3.87634C2.84827 34.8964 1.86231 34.488 1.13535 33.761C0.408399 33.0341 0 32.0481 0 31.02V3.88562C0 2.85755 0.408399 1.87159 1.13535 1.14463C1.86231 0.417677 2.84827 0.00927734 3.87634 0.00927734H31.0108ZM30.0417 30.0509V19.7786C30.0417 18.1029 29.376 16.4958 28.191 15.3108C27.0061 14.1259 25.399 13.4602 23.7232 13.4602C22.0758 13.4602 20.157 14.468 19.2267 15.9798V13.8284H13.8192V30.0509H19.2267V20.4958C19.2267 19.0034 20.4283 17.7823 21.9207 17.7823C22.6404 17.7823 23.3305 18.0682 23.8394 18.5771C24.3483 19.0859 24.6342 19.7761 24.6342 20.4958V30.0509H30.0417ZM7.52011 10.7855C8.38369 10.7855 9.2119 10.4425 9.82254 9.83182C10.4332 9.22117 10.7762 8.39296 10.7762 7.52939C10.7762 5.72688 9.32261 4.25387 7.52011 4.25387C6.65139 4.25387 5.81825 4.59897 5.20397 5.21325C4.58969 5.82753 4.2446 6.66067 4.2446 7.52939C4.2446 9.33188 5.71761 10.7855 7.52011 10.7855ZM10.2142 30.0509V13.8284H4.84543V30.0509H10.2142Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Team;

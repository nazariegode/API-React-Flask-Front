import React from "react";

export const Navbar = () => (
	<nav className="navbar navbar-expand-lg bg-light">
		<div className="container-fluid">
			<a className="navbar-brand text-black" href="/">Inicio</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0">

					<li className="nav-item">
						<a className="nav-link active text-black" aria-current="page" href="/ingreso">Ingreso</a>
					</li>

					<li className="nav-item">
						<a className="nav-link text-black" href="/registro">Registro</a>
					</li>


					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Menú
						</a>
						<ul className="dropdown-menu dropdown-menu-end">
							<li><a className="dropdown-item" href="/profile">Perfil</a></li>
							<li><a className="dropdown-item" href="/modificar">Modifica tus datos</a></li>
							<li> <hr className="dropdown-divider" /></li>
							<li><a className="dropdown-item" href="/">Salir</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

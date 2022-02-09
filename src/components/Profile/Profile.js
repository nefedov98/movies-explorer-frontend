import './Profile.css';

function Profile() {

  return (
    <div className="profile">
      <h2 className="profile__title">
        Привет, Вася</h2>
      <form
        className="profile__form"
        noValidate
      >
        <label className="profile__form-label" htmlFor="name">
          Имя
          <input
            className="profile__form-input"
            id="name"
            required
            minLength="2"
            maxLength="30"
            name="name"
            type="text"
            placeholder="Имя"
            autoComplete="off"
          />
          {/* <span className="profile__form-error">ОШИБКААААААА</span> */}
        </label>

        <label className="profile__form-label" htmlFor="email">
          Почта
          <input
            className="profile__form-input"
            id="email"
            required
            name="email"
            type="email"
            placeholder="Почта"
            autoComplete="off"
          />
          {/* <span className="profile__form-error">ОШИБКААААААА</span> */}
        </label>
        <button
          type="submit"
          className= 'profile__form-submit profile__form-submit_is-active'
        >
          Редактировать
        </button>
      </form>
      <button
        type="button"
        className="profile__logout-btn"
      >
        Выйти из аккаунта
      </button>
    </div>
  );
}

export default Profile;
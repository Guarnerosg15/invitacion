import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Invitacion from './Invitacion';
import '@testing-library/jest-dom/extend-expect';

describe('Invitacion Component', () => {
  test('renders the invitation title', () => {
    render(<Invitacion />);
    const titleElement = screen.getByText(/¡Te invitamos a nuestra Fiesta de 15 años!/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the countdown timer', () => {
    render(<Invitacion />);
    const countdownElement = screen.getByText(/días/i);
    expect(countdownElement).toBeInTheDocument();
  });

  test('confirms attendance and updates the counter', () => {
    render(<Invitacion />);
    const confirmButton = screen.getByText(/Confirmar Asistencia/i);
    fireEvent.click(confirmButton);
    const confirmedCount = screen.getByText(/Asistentes confirmados: 1/i);
    expect(confirmedCount).toBeInTheDocument();
  });

  test('confirms non-attendance and updates the counter', () => {
    render(<Invitacion />);
    const noAttendButton = screen.getByText(/No Asistiré/i);
    fireEvent.click(noAttendButton);
    const notAttendingCount = screen.getByText(/No asistentes confirmados: 1/i);
    expect(notAttendingCount).toBeInTheDocument();
  });

  test('disables the confirm attendance button after clicking', () => {
    render(<Invitacion />);
    const confirmButton = screen.getByText(/Confirmar Asistencia/i);
    fireEvent.click(confirmButton);
    expect(confirmButton).toBeDisabled();
  });

  test('disables the confirm non-attendance button after clicking', () => {
    render(<Invitacion />);
    const noAttendButton = screen.getByText(/No Asistiré/i);
    fireEvent.click(noAttendButton);
    expect(noAttendButton).toBeDisabled();
  });
});
